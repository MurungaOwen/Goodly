import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import {useState} from "react"
import { faq, partners } from "@/(Utils)/data";
import { sendMessage } from "@/(Api)/sendMessage";
import "./loader.css"
import { useToast } from "@/components/ui/use-toast"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



export default function PartnersSection() {

    const [loading, setLoading] = useState(false);
    const [contactData, setContactData] = useState({
        "name": "",
        "email": "",
        "subject": "",
        "message": ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactData({
          ...contactData,
          [name]: value
        });
      };
      
      const { toast } = useToast()
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            // Assuming sendMessage takes contactData and sends it
            await sendMessage(contactData);
            toast({
                title: "Success",
                description: "Your message has been sent successfully",
              })
            // Clear the form data
            setContactData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
            
            console.log("Message sent", contactData);
        } catch (error) {
            toast({
                title: "Error",
                description: "Your message was not send kindly retry",
              })
            console.log("Error occurred", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <section className="bg-gray-100 py-8">
                <div className="container mx-auto px-4 "data-aos="fade-right" data-aos-offset="100">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Partners</h2>
                <div className="">
                    <div className="flex justify-center">
                    {partners.map((logo, index) => (
                        <div key={index} className="partner-logo p-2 gap-2">
                        <img src={logo} alt={`Partner ${index + 1}`} className="w-auto h-32 object-fit rounded-full mx-4" />
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </section>

            {/* contact us */}
            <section className="py-16 bg-gray-100 hidden lg:flex">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-stretch">
                    {/* Image Section */}
                    <div className="flex-shrink-0 lg:w-1/2 mb-8 lg:mb-0 flex items-center">
                        <img
                        src="https://images.pexels.com/photos/8550846/pexels-photo-8550846.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Contact Us"
                        className="w-full h-fit md:h-full object-cover rounded-lg md:rounded-none shadow-lg"
                        />
                    </div>
                    {/* Contact Information Section */}
                    <div className="lg:w-1/2 lg:rounded-none lg:pl-8 flex flex-col justify-center bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-lg mb-4">
                        We'd love to hear from you! Whether you have a question about our services, want to get involved, or need assistance, feel free to reach out.
                        </p>
                        <div className="mb-4">
                            <p className="font-semibold">Email:</p>
                            <a href="mailto:info@example.com" className="text-blue-500 hover:underline">info@Goodly.org</a>
                            </div>
                            <div className="mb-4">
                            <p className="font-semibold">Phone:</p>
                            <p className="text-gray-700">+254114884211</p>
                            </div>
                            <div className="mb-4">
                            <p className="font-semibold">Address:</p>
                            <p className="text-gray-700">Kisumu, Kenya</p>

                            <Popover>
                                <PopoverTrigger><div className="mt-5 text-xl bg-orange-500 text-white p-2">Message us</div></PopoverTrigger>
                                <div className="hidden lg:block">
                                <PopoverContent>
                                {loading ? <div className="loader mx-auto justify-center"></div> : 
                                    <form onSubmit={handleSubmit} className="max-w-lg hidden lg:block w-full">
                                    <div className="mb-5">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                                        <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={contactData.name}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="John Doe"
                                        required
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                                        <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={contactData.email}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="name@example.com"
                                        required
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                                        <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={contactData.subject}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Subject of your message"
                                        required
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                                        <textarea
                                        id="message"
                                        name="message"
                                        value={contactData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Your message here..."
                                        required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="mb-3 text-white bg-orange-500 hover:text-black hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                    >
                                        Send Message
                                    </button>
                                    </form>
                                }
                                </PopoverContent>
                                </div>

                            </Popover>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            
            {/* mobile contact us */}
            <section className="py-16 block lg:hidden mt-5" data-aos="fade-right" data-aos-offset="100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

                    {loading ? <div className="loader mx-auto justify-center"></div> : 
                        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            value={contactData.name}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="John Doe"
                            required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            value={contactData.email}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="name@example.com"
                            required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                            <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={contactData.subject}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Subject of your message"
                            required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                            <textarea
                            id="message"
                            name="message"
                            value={contactData.message}
                            onChange={handleChange}
                            rows={4}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Your message here..."
                            required
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-orange-500 hover:text-black hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Send Message
                        </button>
                        </form>
                    }
                    
                </div>
            </section>
            <div className="py-10 justify-center" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
                <FAQ />
            </div>
            
        </>
      
    );
}
  
export function FAQ() {
    return (
        <>
            <h4 className="text-2xl lg:text:3xl font-bold text-center">Frequently Asked Questions</h4>
            <Accordion type="single" collapsible className="w-3/4 justify-center mx-auto py-8">
                {
                    faq.map((value, index)=>(
                        <AccordionItem value={"item"+index}>
                            <AccordionTrigger>{value.question}</AccordionTrigger>
                            <AccordionContent>
                                {value.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
                
        </Accordion>
        </>

    )
  }
  
