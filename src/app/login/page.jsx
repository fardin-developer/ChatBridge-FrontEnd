"use client"
import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import axios from 'axios';

const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Form data state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!isLogin) {
        // Registration
        const response = await axios.post('http://localhost:3000/api/v1/user/register', {
          email: formData.email,
          name: formData.name,
          password: formData.password
        });

        console.log('Registration successful:', response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setIsLogin(true);
        setFormData({ email: '', password: '', name: '' });
      } else {
        // Login logic here when you have the endpoint
        const response = await axios.post('http://localhost:3000/api/v1/user/login', {
          email: formData.email,
          password: formData.password
        })
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        window.location.href = '/dashboard';

      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="bg-background/95 backdrop-blur border border-border rounded-lg p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-text mb-2">
              {isLogin ? 'Welcome back' : 'Create an account'}
            </h2>
            <p className="text-text-muted">
              {isLogin
                ? 'Enter your credentials to access your account'
                : 'Fill in the information to get started'}
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 rounded-md bg-accent-red/10 border border-accent-red text-accent-red text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-text">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-text-muted group-focus-within:text-text transition-colors duration-200" />
                  <input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="peer w-full pl-10 pr-4 py-2 bg-background border border-border-muted rounded-md text-text placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary [&:-webkit-autofill]:bg-background [-webkit-autofill]:bg-background autofill:bg-background [&:-webkit-autofill]:text-text [&:-webkit-autofill_selected]:bg-background"
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-text">
                Email
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-text-muted group-focus-within:text-text transition-colors duration-200" />
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="m@example.com"
                  className="peer w-full pl-10 pr-4 py-2 bg-background border border-border-muted rounded-md text-text placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary [&:-webkit-autofill]:bg-background [-webkit-autofill]:bg-background autofill:bg-background [&:-webkit-autofill]:text-text [&:-webkit-autofill_selected]:bg-background"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-text">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-text-muted group-focus-within:text-text transition-colors duration-200" />
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="peer w-full pl-10 pr-4 py-2 bg-background border border-border-muted rounded-md text-text placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary [&:-webkit-autofill]:bg-background [-webkit-autofill]:bg-background autofill:bg-background [&:-webkit-autofill]:text-text [&:-webkit-autofill_selected]:bg-background"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-primary rounded-md text-text flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              disabled={loading}
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
              ) : (
                <>
                  {isLogin ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <button
            className="w-full mt-4 text-text-muted hover:text-text transition-colors"
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
              setFormData({ email: '', password: '', name: '' });
            }}
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPages;