import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bone, Heart, Camera } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <nav className="bg-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">PawsomeWorld</h1>
          <div className="flex space-x-4">
            {[
              { icon: <Bone className="h-5 w-5" />, label: "Breeds" },
              { icon: <Heart className="h-5 w-5" />, label: "Care" },
              { icon: <Camera className="h-5 w-5" />, label: "Gallery" },
            ].map((item) => (
              <Button key={item.label} variant="ghost" className="flex items-center">
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a" 
              alt="Cute dog" 
              className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-lg"
            />
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About Dogs</TabsTrigger>
              <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
              <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
            </TabsList>
            <TabsContent value="about">
              <Card>
                <CardHeader>
                  <CardTitle>What are Dogs?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="characteristics">
              <Card>
                <CardHeader>
                  <CardTitle>Characteristics of Dogs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>Loyal and affectionate</li>
                    <li>Highly trainable</li>
                    <li>Come in various sizes and breeds</li>
                    <li>Have an excellent sense of smell</li>
                    <li>Can understand human emotions</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="breeds">
              <Card>
                <CardHeader>
                  <CardTitle>Popular Dog Breeds</CardTitle>
                  <CardDescription>Here are some of the most popular dog breeds worldwide:</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>Labrador Retriever</li>
                    <li>German Shepherd</li>
                    <li>Golden Retriever</li>
                    <li>French Bulldog</li>
                    <li>Beagle</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
