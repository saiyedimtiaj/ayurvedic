import Footer from "@/components/Footer";
import Link from "next/link";
import ToggleMemu from "@/components/ToggleMemu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "privacy-policy - Ayurvedic",
  description: "ayurvedicbyadivashi",
  icons: "./ADIVASHI-LOGOiu-01.svg",
};

const page = () => {
  return (
    <div>
      <div className="border-b py-5">
        <div className="container mx-auto px-2 md:px-4 flex items-center justify-between">
          <div></div>
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/">Home</Link>
            <Link href="/terms-and-condition"> Terms & Condition</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-2 md:px-4 mb-10">
        <h1 className="text-2xl font-semi-bold mt-8 md:text-4xl">আমরা কে</h1>
        <p className="mt-5 text-sm md:text-lg">
          আমাদের ওয়েবসাইটের ঠিকানা: https://www.ayurvedicbyadivashi.com
        </p>
        <h1 className="text-xl sm:text-2xl font-semibold mt-6 md:mt-8 md:text-4xl">
          মন্তব্য
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
          যখন দর্শনার্থীরা ওয়েবসাইটে মন্তব্য করেন, আমরা মন্তব্য ফর্মে প্রদত্ত
          তথ্য সংগ্রহ করি, পাশাপাশি দর্শনার্থীর IP ঠিকানা এবং ব্রাউজারের ইউজার
          এজেন্ট স্ট্রিং স্প্যাম সনাক্ত করতে সহায়তা করার জন্য সংগ্রহ করি।
          <br /> <br />
          আপনার ইমেইল ঠিকানা থেকে একটি অজ্ঞাতনামা স্ট্রিং (যাকে হ্যাশ বলা হয়)
          Gravatar সার্ভিসে পাঠানো হতে পারে, এটি দেখতে যে আপনি এটি ব্যবহার করছেন
          কিনা। Gravatar সার্ভিসের গোপনীয়তা নীতি এখানে পাওয়া যাবে:
          <Link
            href="https://www.ayurvedicbyadivashi.com/privacy-policy"
            className="underline"
          >
            Privacy Policy
          </Link>
          । মন্তব্য অনুমোদনের পর, আপনার প্রোফাইল ছবি জনসম্মুখে প্রদর্শিত হবে।
        </p>

        <h1 className="text-2xl font-semi-bold mt-8 md:text-4xl">মিডিয়া</h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
          যদি আপনি ওয়েবসাইটে ছবি আপলোড করেন, তাহলে অনুগ্রহ করে নিশ্চিত করুন যে
          ছবিগুলিতে এম্বেড করা লোকেশন ডাটা (EXIF GPS) না থাকে। ওয়েবসাইটের
          দর্শনার্থীরা ছবি থেকে এই লোকেশন ডাটা ডাউনলোড ও এক্সট্র্যাক্ট করতে
          পারেন।
        </p>
        <h1 className="text-2xl font-semi-bold mt-8 md:text-4xl">কুকিজ</h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
          যদি আপনি আমাদের ওয়েবসাইটে মন্তব্য করেন, তবে আপনার নাম, ইমেইল ঠিকানা
          এবং ওয়েবসাইট কুকিজে সংরক্ষণ করতে পারেন। এটি আপনার সুবিধার্থে যাতে
          আপনি পুনরায় মন্তব্য করার সময় তথ্য পূরণ করতে না হয়। এই কুকিজ এক বছর
          পর্যন্ত সংরক্ষিত থাকবে।
          <br />
          <br />
          আপনি যদি আমাদের লগইন পৃষ্ঠায় যান, তবে একটি অস্থায়ী কুকি সেট করা হবে
          যা নির্ধারণ করবে যে আপনার ব্রাউজার কুকিজ গ্রহণ করে কিনা।
        </p>
        <h1 className="text-2xl font-semi-bold mt-8 md:text-4xl">
          অন্য ওয়েবসাইট থেকে এম্বেডকৃত কনটেন্ট
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
          এই ওয়েবসাইটের আর্টিকেলে এম্বেডকৃত কনটেন্ট (যেমন ভিডিও, ছবি, আর্টিকেল
          ইত্যাদি) থাকতে পারে। এই কনটেন্ট ঠিক সেইভাবেই কাজ করবে যেমনটি
          দর্শনার্থী সেই ওয়েবসাইটে গিয়ে দেখতেন।
        </p>
        <h1 className="text-2xl font-semi-bold mt-8 md:text-4xl">
          আমরা আপনার ডাটা কার সাথে ভাগ করি
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
          যদি আপনি পাসওয়ার্ড রিসেট অনুরোধ করেন, তাহলে আপনার IP ঠিকানা রিসেট
          ইমেইলে অন্তর্ভুক্ত হবে।
        </p>
        <h1 className="text-2xl font-semi-bold mt-8 md:text-4xl">
          আমরা কতদিন আপনার ডাটা সংরক্ষণ করি
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
          আপনি যদি মন্তব্য করেন, তাহলে মন্তব্য এবং এর মেটাডাটা অনির্দিষ্ট সময়ের
          জন্য সংরক্ষিত থাকবে।
        </p>
        <h1 className="text-2xl font-semi-bold mt-8 md:text-4xl">
          আপনার ডাটার উপর আপনার কি অধিকার আছে
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
          যদি আপনি আমাদের ওয়েবসাইটে একটি অ্যাকাউন্ট রাখেন বা মন্তব্য করেছেন,
          তাহলে আপনি আমাদের কাছে আপনার ব্যক্তিগত তথ্যের একটি এক্সপোর্ট করা ফাইল
          অনুরোধ করতে পারেন।
        </p>
        <h1 className="text-2xl font-semi-bold mt-8 md:text-4xl">
          আপনার ডাটা কোথায় পাঠানো হয়
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
          দর্শনার্থীদের মন্তব্য একটি স্বয়ংক্রিয় স্প্যাম শনাক্তকরণ পরিষেবার
          মাধ্যমে যাচাই করা হতে পারে।
        </p>
      </div>
      <ToggleMemu />
      <Footer />
    </div>
  );
};

export default page;
