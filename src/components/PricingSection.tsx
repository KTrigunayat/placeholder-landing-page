import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹999",
      period: "/month",
      description: "Perfect for small events and personal use",
      features: [
        "Up to 3 events per month",
        "Basic AI assistance",
        "WhatsApp integration",
        "Email support",
        "Basic analytics"
      ],
      popular: false,
      buttonText: "Get Started",
      buttonStyle: "bg-purple-600 hover:bg-purple-700 text-white"
    },
    {
      name: "Professional",
      price: "₹2,999",
      period: "/month",
      description: "Ideal for event managers and small businesses",
      features: [
        "Up to 10 events per month",
        "Advanced AI recommendations",
        "Full vendor management",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "Custom integrations"
      ],
      popular: true,
      buttonText: "Start Free Trial",
      buttonStyle: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
    },
    {
      name: "Enterprise",
      price: "₹9,999",
      period: "/month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited events",
        "AI-powered automation",
        "Advanced vendor network",
        "24/7 dedicated support",
        "Custom reporting",
        "White-label solution",
        "API access",
        "Custom integrations"
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonStyle: "bg-gray-800 hover:bg-gray-900 text-white"
    }
  ];

  return (
    <section id="pricing" className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the perfect plan for your event management needs. All plans include core AI features and WhatsApp integration.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-lg border-2 p-8 ${
                  plan.popular 
                    ? 'border-purple-500 transform scale-105' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan header */}
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Button className={`w-full py-3 rounded-full font-semibold ${plan.buttonStyle}`}>
                      {plan.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Need a custom solution? <a href="#contact" className="text-purple-600 hover:text-purple-700 font-semibold">Contact our sales team</a>
            </p>
            <p className="text-sm text-gray-500">
              All plans include 14-day free trial • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;