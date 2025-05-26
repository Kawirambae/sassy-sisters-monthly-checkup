
import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface LoginFormProps {
  onLogin: (email: string, userType: 'client' | 'admin') => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [userType, setUserType] = useState<'client' | 'admin'>('client');

  const handleSendOTP = () => {
    if (email) {
      // In a real app, this would send an OTP to the email
      console.log(`Sending OTP to ${email}`);
      setStep('otp');
    }
  };

  const handleVerifyOTP = () => {
    if (otp) {
      // In a real app, this would verify the OTP
      console.log(`Verifying OTP: ${otp}`);
      onLogin(email, userType);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Baddie's
            </span>
            <br />
            <span className="text-2xl text-gray-300">Monthly Maintenance</span>
            <span className="text-3xl ml-2">💅</span>
          </h1>
          <p className="text-gray-400">Your Glam. Our System.</p>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {step === 'email' ? 'Welcome Back' : 'Verify Your Email'}
            </CardTitle>
            <CardDescription className="text-gray-300">
              {step === 'email' 
                ? 'Enter your email to receive a login code' 
                : `We sent a code to ${email}`
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 'email' ? (
              <>
                <div className="flex gap-2 mb-4">
                  <Button
                    variant={userType === 'client' ? 'default' : 'outline'}
                    onClick={() => setUserType('client')}
                    className={`flex-1 ${
                      userType === 'client' 
                        ? 'bg-pink-600 hover:bg-pink-700' 
                        : 'border-white/30 text-white hover:bg-white/10'
                    }`}
                  >
                    Client
                  </Button>
                  <Button
                    variant={userType === 'admin' ? 'default' : 'outline'}
                    onClick={() => setUserType('admin')}
                    className={`flex-1 ${
                      userType === 'admin' 
                        ? 'bg-purple-600 hover:bg-purple-700' 
                        : 'border-white/30 text-white hover:bg-white/10'
                    }`}
                  >
                    Staff/Admin
                  </Button>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <Button 
                  onClick={handleSendOTP}
                  disabled={!email}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  Send Login Code
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Enter 6-digit code</label>
                  <Input
                    type="text"
                    placeholder="123456"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="text-center text-2xl tracking-widest bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    maxLength={6}
                  />
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline"
                    onClick={() => setStep('email')}
                    className="flex-1 border-white/30 text-white hover:bg-white/10"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={handleVerifyOTP}
                    disabled={!otp || otp.length !== 6}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  >
                    Verify & Login
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-gray-400 text-sm">
          <p>Salon Loyalty + Service Reminder App</p>
          <p className="mt-2">SDG 5 • SDG 8 • SDG 9</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
