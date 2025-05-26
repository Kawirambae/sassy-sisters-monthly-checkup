
import { useState } from "react";
import { Calendar, Star, Sparkles, Heart, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("skincare");

  const maintenanceCategories = [
    {
      id: "skincare",
      title: "Skincare Ritual",
      icon: Sparkles,
      color: "from-pink-500 to-purple-600",
      tasks: [
        "Deep cleansing face mask",
        "Exfoliate with gentle scrub",
        "Apply vitamin C serum",
        "Moisturize and SPF"
      ]
    },
    {
      id: "haircare",
      title: "Hair Care",
      icon: Star,
      color: "from-purple-500 to-indigo-600",
      tasks: [
        "Deep conditioning treatment",
        "Scalp massage with oils",
        "Trim split ends",
        "Protective styling"
      ]
    },
    {
      id: "wellness",
      title: "Wellness Check",
      icon: Heart,
      color: "from-rose-500 to-pink-600",
      tasks: [
        "Meditation session",
        "Journal gratitude",
        "Hydration goals",
        "Gentle yoga flow"
      ]
    },
    {
      id: "goals",
      title: "Monthly Goals",
      icon: Target,
      color: "from-amber-500 to-orange-600",
      tasks: [
        "Review last month",
        "Set new intentions",
        "Plan self-care dates",
        "Update vision board"
      ]
    }
  ];

  const currentCategory = maintenanceCategories.find(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-400 to-pink-500 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format" 
                    alt="Beautiful Black woman" 
                    className="w-28 h-28 rounded-full object-cover border-4 border-white/20"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Baddies
              </span>
              <br />
              Monthly Maintenance
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Your monthly self-care ritual planner. Because maintaining your glow is a lifestyle, not a trend.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold">
                Start This Month
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full">
                View Calendar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {maintenanceCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Active Category Content */}
        {currentCategory && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${currentCategory.color}`}>
                    <currentCategory.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{currentCategory.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      Monthly maintenance checklist
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentCategory.tasks.map((task, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-6 h-6 rounded-full border-2 border-pink-400 flex items-center justify-center hover:bg-pink-400 transition-colors cursor-pointer">
                        <div className="w-3 h-3 rounded-full bg-pink-400 opacity-0 hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-gray-200">{task}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  This Month's Focus
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30">
                  <h4 className="font-semibold text-pink-300 mb-2">Week 1: Foundation</h4>
                  <p className="text-gray-300 text-sm">Establish your routine and set the tone for the month.</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30">
                  <h4 className="font-semibold text-purple-300 mb-2">Week 2: Consistency</h4>
                  <p className="text-gray-300 text-sm">Build momentum and stick to your maintenance schedule.</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-400/30">
                  <h4 className="font-semibold text-rose-300 mb-2">Week 3: Enhancement</h4>
                  <p className="text-gray-300 text-sm">Add special treatments and extra self-care moments.</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30">
                  <h4 className="font-semibold text-amber-300 mb-2">Week 4: Reflection</h4>
                  <p className="text-gray-300 text-sm">Review progress and plan for next month's glow-up.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-pink-400/30 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-pink-300 mb-2">28</div>
              <div className="text-gray-300">Days of Self-Care</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border-purple-400/30 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-300 mb-2">16</div>
              <div className="text-gray-300">Maintenance Tasks</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-rose-500/20 to-pink-500/20 border-rose-400/30 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-rose-300 mb-2">100%</div>
              <div className="text-gray-300">Baddie Energy</div>
            </CardContent>
          </Card>
        </div>

        {/* Community Section */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <Users className="w-6 h-6" />
              Baddie Community
            </CardTitle>
            <CardDescription className="text-gray-300">
              Connect with other queens on their maintenance journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">👑</span>
                </div>
                <h4 className="font-semibold mb-2">Share Progress</h4>
                <p className="text-gray-300 text-sm">Show off your glow-up journey</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
                <h4 className="font-semibold mb-2">Get Tips</h4>
                <p className="text-gray-300 text-sm">Learn from other baddies</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h4 className="font-semibold mb-2">Stay Motivated</h4>
                <p className="text-gray-300 text-sm">Support each other daily</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
