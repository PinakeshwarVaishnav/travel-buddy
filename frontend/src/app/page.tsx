import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Plane, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Plane className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-blue-600">TravelBuddy</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Destinations
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Find Buddies
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto mt-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Find Your Perfect Travel Companion
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover like-minded travelers and explore the world together!
          </p>
          <div className="flex justify-center">
            <Input
              className="w-1/2 mr-2"
              placeholder="Where do you want to go?"
            />
            <Button>Search Buddies</Button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Bali, Indonesia", "Paris, France", "Tokyo, Japan"].map(
              (destination) => (
                <Card key={destination}>
                  <CardHeader>
                    <CardTitle>{destination}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={`/placeholder.svg?height=200&width=400`}
                      alt={destination}
                      width={400}
                      height={200}
                      className="rounded-md"
                    />
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Explore
                    </Button>
                  </CardFooter>
                </Card>
              ),
            )}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Potential Travel Buddies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Alex",
                age: 28,
                destination: "Bali, Indonesia",
                dates: "Aug 15 - Aug 30",
                interests: ["Beach", "Surfing", "Culture"],
              },
              {
                name: "Emma",
                age: 24,
                destination: "Paris, France",
                dates: "Sep 5 - Sep 20",
                interests: ["Art", "Food", "History"],
              },
              {
                name: "Ryan",
                age: 31,
                destination: "Tokyo, Japan",
                dates: "Oct 10 - Oct 25",
                interests: ["Technology", "Anime", "Sushi"],
              },
            ].map((buddy) => (
              <Card key={buddy.name}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage
                        src={`/placeholder.svg?height=40&width=40`}
                      />
                      <AvatarFallback>{buddy.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>
                        {buddy.name}, {buddy.age}
                      </CardTitle>
                      <CardDescription>{buddy.destination}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{buddy.dates}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {buddy.interests.map((interest) => (
                      <Badge key={interest} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Connect</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 mt-12 py-8">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2025 TravelBuddy. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-blue-600 hover:underline mx-2">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-600 hover:underline mx-2">
              Terms of Service
            </a>
            <a href="#" className="text-blue-600 hover:underline mx-2">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
