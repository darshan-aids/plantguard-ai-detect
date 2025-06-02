
import Header from "@/components/Header";
import { Leaf, Award, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
                About PlantGuard
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing plant care through artificial intelligence and cutting-edge technology
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-8 h-8 text-green-500" />
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              At PlantGuard, we're on a mission to democratize plant health diagnosis and make expert-level plant care accessible to everyone. Our AI-powered platform combines advanced machine learning with agricultural expertise to help gardeners, farmers, and plant enthusiasts identify and treat plant diseases quickly and accurately.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
              <Award className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Advanced AI Technology</h3>
              <p className="text-gray-700 leading-relaxed">
                Our state-of-the-art computer vision models are trained on thousands of plant disease images, enabling accurate identification with over 95% precision across multiple plant species.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
              <Users className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Expert-Backed Solutions</h3>
              <p className="text-gray-700 leading-relaxed">
                Every treatment recommendation is reviewed by certified plant pathologists and agricultural experts, ensuring you receive reliable, science-based solutions for your plants.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                PlantGuard was born from a simple observation: millions of plants die each year from treatable diseases simply because plant owners don't know what's wrong or how to fix it. Traditional plant diagnosis requires expensive consultations with experts or time-consuming research that often leads to incorrect treatments.
              </p>
              <p>
                Our team of AI researchers, plant pathologists, and software engineers came together to solve this problem. We developed a platform that puts the knowledge of plant experts directly into the hands of anyone with a smartphone camera.
              </p>
              <p>
                Today, PlantGuard serves thousands of users worldwide, from home gardeners nurturing their first houseplant to commercial farmers protecting their crops. We're proud to be at the forefront of agricultural technology, making plant care smarter, more accessible, and more effective.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                <p className="text-green-100">Making plant expertise available to everyone, everywhere</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-green-100">Continuously improving through cutting-edge AI research</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-green-100">Promoting healthy plants for a healthier planet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
