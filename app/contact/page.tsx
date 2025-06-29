"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';


const info =[
    {
        icon: FaPhoneAlt,
        title: "Phone",
        description: "+1 (626) 243-6274"
    },
    {
        icon: FaEnvelope,
        title: "Email",
        description: "alejandro.12w@gmail.com"
    },
    {
        icon: FaMapMarkedAlt,
        title: "Address",
        description: "451 S Harvard Blvd, Los Angeles, CA, USA"
    }
]


const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        service: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState<'success' | 'error'>('success');
    const [isMessageSent, setIsMessageSent] = useState(false);

    useEffect(() => {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
    }, []);

    const showNotification = (message: string, type: 'success' | 'error') => {
        setToastMessage(message);
        setToastType(type);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    service: formData.service,
                    to_email: process.env.NEXT_PUBLIC_TO_EMAIL!
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            
            showNotification('Message sent successfully! 🚀', 'success');
            setFormData({ name: '', email: '', message: '', service: '' });
            setIsMessageSent(true);
        } catch (error) {
            console.error('Error:', error);
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.5, ease: "easeIn" } }}
            className="py-6 -mt-20 xl:mt-0"
        >
            {/* Toast Notification */}
            {showToast && (
                <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 ${
                    toastType === 'success' 
                        ? 'bg-[#00ff99] text-black' 
                        : 'bg-red-500 text-white'
                }`}>
                    <p className="font-medium">{toastMessage}</p>
                </div>
            )}

            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gab-[30px]">
                    <div className="xl:h-[54%] order-2 xl:order-none"> 
                        {/* form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-[#00ff99]">Let&apos;s work together</h3>
                            <p className="text-white/80">
                                {isMessageSent 
                                    ? "✅ Message sent successfully! I'll get back to you soon." 
                                    : "I'm always open to discussing new projects and ideas."
                                }
                            </p>
                            <Input 
                                placeholder="Your Name" 
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                            />
                            <Input 
                                placeholder="Your Email" 
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                            <Textarea 
                                placeholder="Your Message" 
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                required
                            /> 
                            <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                                <SelectTrigger className="w-full focus:border-[#00ff99]">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Service</SelectLabel>
                                        <SelectItem value="smart-contract">Smart Contract Development</SelectItem>
                                        <SelectItem value="blockchain">Blockchain Integration</SelectItem>
                                        <SelectItem value="web">Web Development</SelectItem>
                                        <SelectItem value="ui">Ui Development</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Button type="submit" className="max-w-40" disabled={isLoading}>
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        {/* info */}
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index)=>{
                                return(
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#00ff99] rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">
                                                <item.icon />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default ContactPage;
