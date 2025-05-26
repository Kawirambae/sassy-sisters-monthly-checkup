
import { useState, useEffect } from "react";
import { Calendar, Star, Clock, Award, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState("user@example.com");
  const [loyaltyPoints, setLoyaltyPoints] = useState(80);
  const [visitHistory, setVisitHistory] = useState([
    { date: "14 May", service: "Braiding" },
    { date: "10 May", service: "Brazilian Wax" },
    { date: "03 May", service: "Manicure with Gel" }
  ]);

  const services = {
    nails: ["Manicures", "Manicures with Gel", "Pedicure", "Pedicure with Gel", "Nail Tips", "Ombre", "Acrylics"],
    massage: ["Full Body", "Neck and Back"],
    waxing: ["Underarms", "Bikini", "Brazilian", "Legs", "Hands", "Full Body"],
    hair: ["Weaving", "Braiding", "Wash and Set", "Dreadlocks"],
    facials: ["Full Facial", "Half Facial"]
  };

  const upcomingReminders = [
    { service: "Braiding", date: "14 June" },
    { service: "Manicure", date: "3 June" },
    { service: "Waxing", date: "10 June" }
  ];

  const visitedDays = [3, 10, 14];

  const generateCalendar = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(
        <div
          key={i}
          className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${
            visitedDays.includes(i)
              ? "bg-pink-500 text-white font-bold"
              : "bg-white/20 text-gray-300 hover:bg-white/30"
          }`}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Baddie's Monthly Maintenance
            </span>
            <span className="text-3xl ml-2">💅</span>
          </h1>
          <p className="text-xl text-gray-300">
            Welcome, <span className="text-pink-400 font-semibold">{userEmail}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {/* Services Offered */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Star className="w-6 h-6 text-pink-400" />
                Services Offered
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-pink-300 mb-2">💅 Nails</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      {services.nails.map((service, index) => (
                        <li key={index}>• {service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-2">💆 Massage</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      {services.massage.map((service, index) => (
                        <li key={index}>• {service}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-rose-300 mb-2">🪒 Waxing</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      {services.waxing.map((service, index) => (
                        <li key={index}>• {service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-300 mb-2">💇 Hair</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      {services.hair.map((service, index) => (
                        <li key={index}>• {service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">✨ Facials</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      {services.facials.map((service, index) => (
                        <li key={index}>• {service}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Loyalty Points */}
          <Card className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-pink-400/30 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-pink-400" />
                Loyalty Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">{loyaltyPoints}</div>
                <p className="text-gray-300 mb-4">points 🎉</p>
                <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                  ✅ Free Pedicure Eligible!
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Visit History */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-400" />
                Visit History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {visitHistory.map((visit, index) => (
                  <div key={index} className="flex justify-between items-center p-2 rounded bg-white/5">
                    <span className="text-gray-300">{visit.date}</span>
                    <span className="text-pink-300 font-medium">{visit.service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* May Calendar */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-400" />
                May Calendar
              </CardTitle>
              <CardDescription className="text-gray-300">Visits Marked</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1">
                {generateCalendar()}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Reminders */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-rose-400" />
                Upcoming Reminders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingReminders.map((reminder, index) => (
                  <div key={index} className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="font-medium text-rose-300">Next {reminder.service}</div>
                    <div className="text-gray-300 text-sm">{reminder.date}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold">
            Book New Service
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full">
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
