
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { donateApi } from "@/(Api)/donate"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
import { testimonials } from "@/(Utils)/data"


export default function Donation(){

    const [loading, setLoading] = useState(false);
    const [donationData, setdonationData] = useState({
        "name": "",
        "amount": 1,
        "cause": "",
        "phone": ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setdonationData({
          ...donationData,
          [name]: value
        });
      };
      
      const { toast } = useToast()
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const response = await donateApi(donationData);
            toast({
                title: "Success",
                description: response.message,
              })
            // Clear the form data
            setdonationData({
                name: "",
                amount: 0,
                cause: "",
                phone: ""
            });
            
            console.log("Message sent", donationData);
        } catch (error) {
            toast({
                title: "Error",
                description: "Payment wasn't successful kindly retry",
              })
            console.log("Error occurred", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
        <section className="bg-gray-200 py-16">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Difference Today</h1>
                <p className="text-lg mb-8">Your donation helps support street children and orphans. Every contribution counts.</p>
                <a href="#donate-form" className="bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition">Donate Now</a>
            </div>
        </section>

        <section className="py-16 bg-white" data-aos="fade-right" data-aos-offset="100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">How Your Donation Helps</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Education</h3>
                    <p>Your donation supports education for street children, giving them a chance for a better future.</p>
                </div>
                <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
                    <p>Contributions go towards providing essential healthcare services and medical treatments.</p>
                </div>
                <div className="bg-green-100 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Shelter</h3>
                    <p>Help us provide safe and secure shelter to children in need.</p>
                </div>
                </div>
            </div>
        </section>

        <section id="donate-form" className="py-16 bg-gray-100" data-aos="fade-right" data-aos-offset="100">
            <div className="container mx-auto pl-4">
                <h2 className="text-3xl font-bold text-center mb-8">Support Our Cause</h2>
                <div className="flex flex-col md:flex-row items-stretch">
                    {/* Image Section */}
                    <div className="md:w-1/2 flex items-stretch">
                        <img
                            src="https://thecsruniverse.com/adminxsafe/uploads/India%20Gives%20Picture.jpg"
                            alt="Support Our Cause"
                            className="w-full h-full object-cover shadow-lg"
                        />
                    </div>
                    {/* Donation Form Section */}
                        <div className="md:w-1/2 flex items-stretch" data-aos="fade-right" data-aos-offset="100">
                        {
                            loading ? <div className="loader mx-auto justify-center"></div> :
                            <form className="w-full bg-white p-8 shadow-lg flex flex-col justify-between" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name"  className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" id="name" name="name" value={donationData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="John Doe" required />
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="phone number" className="block text-sm font-medium text-gray-700">Mpesa number</label>
                                    <input type="text" id="phone" name="phone" value={donationData.phone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="+254 1234567" required />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                                    <input type="number" id="amount" name="amount" value={donationData.amount} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="+254 1234567" required />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="cause" className="block text-sm font-medium text-gray-700">Donating for</label>
                                    <textarea id="cause" name="cause" value={donationData.cause} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="what you are donating for.."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-orange-300 text-white py-3 rounded-lg font-semibold hover:bg-orange-500 transition">Donate Now</button>
                            </form>
                        }
                            
                        </div>
                </div>
            </div>
        </section>



        <section className="py-16 w-full bg-gray-200" data-aos="fade-right" data-aos-offset="300">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Supporters Say</h2>
                <div className="flex flex-wrap justify-center">
                <Carousel
                    opts={{
                    align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                        <Card className="w-full max-w-sm mx-auto">
                            <CardContent className="p-6">
                            
                            <p className="text-gray-600">{testimonial.message}</p>
                            <p className="text-lg font-semibold mb-2 mt-2">{testimonial.name}</p>
                            <p className="text-gray-300 mb-4 font-thin">{testimonial.role}</p>

                            </CardContent>
                        </Card>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/8 transform -translate-y-1/2 bg-orange-400 p-2 rounded-full text-gray-800 hover:bg-gray-400"/>
                    <CarouselNext  className="absolute right-2 top-1/8 transform -translate-y-1/2 bg-orange-400 p-2 rounded-full text-gray-800 hover:bg-gray-400"/>
                </Carousel>
                </div>
            </div>
        </section>


        </>
    )
}