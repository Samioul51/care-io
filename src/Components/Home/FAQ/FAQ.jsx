import TextType from '@/Components/TextType';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "What services does Care.IO provide?",
            answer:
                "Care.IO provides trusted caregiving services including babysitting, elderly care, and special home care. Users can easily find and hire reliable caretakers based on their specific needs."
        },
        {
            question: "How can I book a caregiving service on Care.IO?",
            answer:
                "Users can book a service by selecting the required care type, preferred time duration, and location. The platform then connects them with suitable and verified caretakers."
        },
        {
            question: "Is Care.IO safe and reliable to use?",
            answer:
                "Yes, Care.IO focuses on safety and trust. All caretakers go through a verification process, and the platform ensures secure bookings to provide a reliable caregiving experience."
        }
    ];

    return (
        <div className='w-full max-w-[1440px] mb-[100px] mx-auto py-[50px]'>
            <div className='text-black text-3xl lg:text-[40px] font-bold text-center mb-10'>
                <TextType
                    text={"FAQs"}
                    typingSpeed={100}
                    pauseDuration={1500}
                    showCursor={false}
                    startOnVisible={true}
                    deletingSpeed={0}
                    loop={false}
                />
            </div>
            <div className='w-full max-w-360 flex flex-col gap-5'>
                {
                    faqs.map((faq, index) => <Accordion key={faq.question} className="shadow-xl bg-gray-100 rounded-lg" type="single" collapsible>
                        <AccordionItem value={index+1}>
                            <AccordionTrigger className="px-5">{faq.question}</AccordionTrigger>
                            <AccordionContent className="px-5">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>)
                }
            </div>
        </div>
    );
};

export default FAQ;