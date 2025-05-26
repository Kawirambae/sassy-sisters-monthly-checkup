
import { useState } from "react";
import { Users, Plus, TrendingUp, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const AdminDashboard = () => {
  const [clients, setClients] = useState([
    { id: 1, email: "user@example.com", visits: 8, lastVisit: "14 May", points: 80 },
    { id: 2, email: "jane@example.com", visits: 12, lastVisit: "12 May", points: 120 },
    { id: 3, email: "mary@example.com", visits: 5, lastVisit: "08 May", points: 50 }
  ]);

  const [newVisit, setNewVisit] = useState({
    clientEmail: "",
    service: "",
    points: 10
  });

  const handleAddVisit = () => {
    // Logic to add new visit
    console.log("Adding visit:", newVisit);
    setNewVisit({ clientEmail: "", service: "", points: 10 });
  };

  const stats = {
    totalClients: clients.length,
    totalVisits: clients.reduce((sum, client) => sum + client.visits, 0),
    totalPoints: clients.reduce((sum, client) => sum + client.points, 0),
    avgVisitsPerClient: Math.round(clients.reduce((sum, client) => sum + client.visits, 0) / clients.length)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Admin Dashboard
            </span>
          </h1>
          <p className="text-xl text-gray-300">Manage your salon's client visits and loyalty program</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-pink-400/30 text-center">
            <CardContent className="pt-6">
              <Users className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-pink-300 mb-1">{stats.totalClients}</div>
              <div className="text-gray-300 text-sm">Total Clients</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border-purple-400/30 text-center">
            <CardContent className="pt-6">
              <Calendar className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-purple-300 mb-1">{stats.totalVisits}</div>
              <div className="text-gray-300 text-sm">Total Visits</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-rose-500/20 to-pink-500/20 border-rose-400/30 text-center">
            <CardContent className="pt-6">
              <Award className="w-8 h-8 text-rose-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-rose-300 mb-1">{stats.totalPoints}</div>
              <div className="text-gray-300 text-sm">Total Points</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-400/30 text-center">
            <CardContent className="pt-6">
              <TrendingUp className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-amber-300 mb-1">{stats.avgVisitsPerClient}</div>
              <div className="text-gray-300 text-sm">Avg Visits/Client</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Add New Visit */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-green-400" />
                Log New Visit
              </CardTitle>
              <CardDescription className="text-gray-300">
                Record a client's visit and award loyalty points
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Client Email</label>
                <Input
                  placeholder="client@example.com"
                  value={newVisit.clientEmail}
                  onChange={(e) => setNewVisit({ ...newVisit, clientEmail: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Service</label>
                <Input
                  placeholder="e.g. Manicure with Gel"
                  value={newVisit.service}
                  onChange={(e) => setNewVisit({ ...newVisit, service: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Points to Award</label>
                <Input
                  type="number"
                  value={newVisit.points}
                  onChange={(e) => setNewVisit({ ...newVisit, points: parseInt(e.target.value) })}
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
              <Button 
                onClick={handleAddVisit}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                Log Visit & Award Points
              </Button>
            </CardContent>
          </Card>

          {/* Client List */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                Client Overview
              </CardTitle>
              <CardDescription className="text-gray-300">
                Recent client activity and loyalty status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {clients.map((client) => (
                  <div key={client.id} className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-medium text-white">{client.email}</div>
                        <div className="text-sm text-gray-400">Last visit: {client.lastVisit}</div>
                      </div>
                      <Badge 
                        className={`${
                          client.points >= 100 
                            ? "bg-green-500/20 text-green-300 border-green-400/30" 
                            : "bg-blue-500/20 text-blue-300 border-blue-400/30"
                        }`}
                      >
                        {client.points} pts
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{client.visits} visits</span>
                      {client.points >= 100 && (
                        <span className="text-green-300 font-medium">🎁 Reward Available!</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
