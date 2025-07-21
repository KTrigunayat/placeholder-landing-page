const ProductivitySection = () => {
  return (
    <section className="w-full py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How Our Tool <span className="bg-gradient-primary bg-clip-text text-transparent">Enhances Productivity</span>
          </h2>
        </div>

        <div className="space-y-12">
          {/* Dark dashboard previews */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 p-6 flex flex-col">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="h-4 bg-blue-400/20 rounded w-3/4"></div>
                    <div className="h-3 bg-purple-400/20 rounded w-1/2"></div>
                    <div className="h-3 bg-green-400/20 rounded w-2/3"></div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="h-8 bg-blue-500/10 rounded border border-blue-500/20"></div>
                      <div className="h-8 bg-purple-500/10 rounded border border-purple-500/20"></div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 mt-4 text-center">Analytics Dashboard</div>
                </div>
              </div>
            ))}
          </div>

          {/* Larger dashboard previews */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
              <div className="aspect-[3/2] bg-gradient-to-br from-slate-800 to-slate-900 p-8 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-slate-400">Performance Test</div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="h-6 bg-blue-400/20 rounded w-4/5"></div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-12 bg-green-500/10 rounded border border-green-500/20 flex items-center justify-center">
                      <div className="text-green-400 text-xs">85%</div>
                    </div>
                    <div className="h-12 bg-blue-500/10 rounded border border-blue-500/20 flex items-center justify-center">
                      <div className="text-blue-400 text-xs">92%</div>
                    </div>
                    <div className="h-12 bg-purple-500/10 rounded border border-purple-500/20 flex items-center justify-center">
                      <div className="text-purple-400 text-xs">78%</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-700 rounded w-full"></div>
                    <div className="h-3 bg-slate-700 rounded w-3/4"></div>
                    <div className="h-3 bg-slate-700 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
              <div className="aspect-[3/2] bg-gradient-to-br from-slate-800 to-slate-900 p-8 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-slate-400">AI Recommendations</div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="h-6 bg-purple-400/20 rounded w-3/4"></div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <div className="h-3 bg-slate-700 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="h-3 bg-slate-700 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <div className="h-3 bg-slate-700 rounded flex-1"></div>
                    </div>
                  </div>
                  <div className="bg-slate-800 rounded p-3 border border-slate-600">
                    <div className="text-xs text-slate-400">AI Insight</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom dashboard previews */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border/20">
              <div className="aspect-[3/2] bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-lg font-semibold">Welcome back, User!</div>
                  <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-border/10">
                      <div className="text-2xl font-bold text-primary">2,463</div>
                      <div className="text-sm text-muted-foreground">Tasks Completed</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-border/10">
                      <div className="text-2xl font-bold text-green-600">98.5%</div>
                      <div className="text-sm text-muted-foreground">Efficiency Rate</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Today's Progress</div>
                      <div className="text-sm text-muted-foreground">85%</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border/20">
              <div className="aspect-[3/2] bg-gradient-to-br from-purple-50 to-blue-50 p-8 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-lg font-semibold">AI Recommendations</div>
                  <div className="w-8 h-8 bg-gradient-secondary rounded-full"></div>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="bg-white rounded-lg p-3 shadow-sm border border-border/10 flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Schedule break time</div>
                      <div className="text-xs text-muted-foreground">Productivity tip</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm border border-border/10 flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Review weekly goals</div>
                      <div className="text-xs text-muted-foreground">Goal tracking</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm border border-border/10 flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Optimize workflow</div>
                      <div className="text-xs text-muted-foreground">AI suggestion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductivitySection;