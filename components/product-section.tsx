/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const carouselItems = [
  {
    id: 1,
    content: (
      <div className="rounded shadow h-[500px] flex items-center justify-center">
        <img
          src="/product-1.png"
          alt="Item 1"
          className="w-full h-full object-contain"
        />
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="rounded shadow h-[500px] flex items-center justify-center">
        <img
          src="/product-2.png"
          alt="Item 2"
          className="w-full h-full object-contain"
        />
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="rounded shadow h-[500px] flex items-center justify-center">
        <img
          src="/product-3.png"
          alt="Item 3"
          className="w-full h-full object-contain"
        />
      </div>
    ),
  },
];

export const ProductSection = () => {
  const [direction, setDirection] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < carouselItems.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <motion.section
      className="bg-[#FAEEDF] py-10 px-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-5 sm:mx-10">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-snug"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          حامل شحن لاسلكي دوار 3 في 1
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-0 sm:gap-8 items-center mt-5 md:mt-10">
          <div className="text-right">
            <motion.p
              className="mt-5 md:mt-0 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-primary"
              style={{ lineHeight: "normal !important" }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              حامل شحن لاسلكي دوار 3 في 1 من Levelo TERRA مع بنك طاقة
            </motion.p>
            <motion.p
              className="mt-10 text-[#616161] text-base sm:text-lg md:text-xl font-bold"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              قابل للفصل بقوة 5000 مللي أمبير في الساعة، ونظام تبديد الحرارة،
              وقوة مغناطيسية قوية، وقاعدة دوارة، ومدة شحن تصل إلى ساعتين - أسود
            </motion.p>
            <Dialog>
              <div className="flex items-center gap-5">
                <DialogTrigger asChild>
                  <motion.button
                    className="mt-8 px-6 py-3 bg-primary text-lg sm:text-xl text-white font-medium rounded-lg shadow-md hover:bg-primary/90 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    إشترِ الآن
                  </motion.button>
                </DialogTrigger>
                <p className="text-primary text-xl font-semibold mt-7">السعر : 200.00 SAR</p>
              </div>
              <DialogContent className="max-w-sm sm:max-[400px] bg-[#FAF3EA]">
                <DialogHeader>
                  <DialogTitle className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary">
                    اعثر على راحتك ووقتك
                  </DialogTitle>
                </DialogHeader>
                <motion.div
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="p-5 rounded-lg w-full max-w-md">
                    <form className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-primary">
                          الإسم بالكامل
                        </label>
                        <input
                          type="text"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-[#FEE3BB] placeholder:text-white rounded-sm shadow-sm focus:outline-none"
                          placeholder="الإسم بالكامل"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary">
                          رقم الهاتف
                        </label>
                        <input
                          type="text"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-[#FEE3BB] placeholder:text-white rounded-sm shadow-sm focus:outline-none"
                          placeholder="رقم الهاتف"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary">
                          العنوان
                        </label>
                        <input
                          type="text"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-[#FEE3BB] placeholder:text-white rounded-sm shadow-sm focus:outline-none"
                          placeholder="العنوان"
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#F57C00] to-[#8F4800] hover:from-[#F57C00] hover:to-[#8F4800] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          اشترى الآن
                        </button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="relative flex transition-transform duration-500 ease-in-out">
                {carouselItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`w-full flex-shrink-0 transition-all duration-500 transform
                    ${index === currentIndex ? "opacity-100" : "opacity-0"}
                    ${
                      direction > 0
                        ? index === currentIndex
                          ? "translate-x-0"
                          : "-translate-x-full"
                        : index === currentIndex
                        ? "translate-x-0"
                        : "translate-x-full"
                    }
                  `}
                    style={{
                      position:
                        index === currentIndex ? "relative" : "absolute",
                      left: 0,
                      right: 0,
                    }}
                  >
                    {item.content}
                  </div>
                ))}
              </div>
            </div>
            <Button
              onClick={prevSlide}
              className={`absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full transition-opacity ${
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100"
              }`}
              disabled={currentIndex === 0}
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              onClick={nextSlide}
              className={`absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full transition-opacity ${
                currentIndex === carouselItems.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100"
              }`}
              disabled={currentIndex === carouselItems.length - 1}
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductSection;
