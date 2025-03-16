import Footer from "@/components/Footer";
import Link from "next/link";
import ToggleMemu from "@/components/ToggleMemu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Condition - Ayurvedic",
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
        <h1 className="text-2xl font-semi-bold mt-8 md:text-4xl">
          ১. পণ্য তথ্য:
        </h1>
        <p className="mt-5 md:text-lg">
          আমরা আমাদের ওয়েবসাইটে প্রদর্শিত পণ্যের বিবরণ যথাসম্ভব সঠিকভাবে
          প্রদানের চেষ্টা করি। দয়া করে মনে রাখবেন যে স্ক্রিন রেজোলিউশনের কারণে
          রঙের পার্থক্যের জন্য আমরা দায়ী নই। আমরা সোশ্যাল মিডিয়ার মাধ্যমে
          অপরিবর্তিত ছবি প্রদান করার অনুমতি পাইনি। যদিও আমরা রঙগুলি সঠিকভাবে
          প্রদর্শনের চেষ্টা করি, তবে আপনার কম্পিউটারের ডিসপ্লে আসল রঙ সঠিকভাবে
          প্রতিফলিত করতে পারে না। বিভিন্ন ডিজাইনের কারণে আকার পরিবর্তন হতে পারে।
          <br />
          পণ্য সম্পর্কে আরও তথ্যের জন্য আমাদের গ্রাহক পরিষেবা পরামর্শকদের সাথে
          যোগাযোগ করুন।
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">
          ২. ক্রয়ের শর্তাবলী:
        </h1>
        <p className="mt-5 md:text-lg">
          ওয়েবসাইটটি আপনাকে আপনার অর্ডার পরীক্ষা করতে এবং ক্রয় বা লেনদেন
          সম্পন্ন করার আগে কোনো ভুল সংশোধন করার অনুমতি দেয়। প্রতিটি অর্ডার
          প্রক্রিয়ার সময় অনুগ্রহ করে আপনার অর্ডারটি পড়ুন এবং পরীক্ষা করুন,
          কারণ আপনি নিশ্চিত করার জন্য দায়ী যে তথ্য সঠিক।
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">
          ৩. কর ও চার্জ:
        </h1>
        <p className="mt-5 md:text-lg">
          আপনার ডেলিভারি ঠিকানার উপর নির্ভর করে বিভিন্ন কর নীতি এবং অতিরিক্ত
          চার্জ প্রযোজ্য হতে পারে।
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">
          ৪. অর্ডার ডেলিভারি:
        </h1>
        <p className="mt-5 md:text-lg">
          ডেলিভারি কুরিয়ার সার্ভিস দ্বারা নিয়ন্ত্রিত হয় এবং আমরা এটির উপর
          কোনো নিয়ন্ত্রণ রাখি না। আমরা সঠিক ডেলিভারির তারিখ এবং সময় জানি না।
          <br />
          আমাদের পণ্য কুরিয়ার সার্ভিসের মাধ্যমে পাঠানো হয়, তাই আমরা কখন তারা
          ডেলিভারি করবে তা নিয়ন্ত্রণ করতে পারি না। তারা যখন আপনাকে কল করবে,
          অনুগ্রহ করে তাদের আপনার পছন্দের সময় এবং তারিখ জানান। অর্ডার বিলম্ব
          করা যাবে না। এটি সর্বাধিক ৭২ ঘণ্টা সময় নিতে পারে!
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">
          ৫. গ্যারান্টি/ওয়ারেন্টি:
        </h1>
        <p className="mt-5 md:text-lg">
          আমরা নিশ্চিত করতে পারি যে আমাদের সমস্ত পণ্য লঞ্চের আগে স্থায়িত্ব ও
          সহনশীলতার জন্য পরীক্ষা করা হয়। দয়া করে মনে রাখবেন যে পণ্যের
          স্থায়িত্ব ও সহনশীলতা পণ্যটির যত্ন ও ব্যবহারের উপর নির্ভর করে। পণ্য
          ব্যবহারের ভুল বা অনুপযুক্ত যত্নের কারণে কোনো সমস্যার জন্য আমরা দায়ী
          থাকব না।
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">৬. মূল্য:</h1>
        <p className="mt-5 md:text-lg">
          ওয়েবসাইটে প্রদত্ত মূল্য এবং প্রাপ্যতার তথ্য পূর্ব ঘোষণা ছাড়াই
          পরিবর্তিত হতে পারে। সমস্ত মূল্য বাংলাদেশি টাকা তে দেওয়া হয়েছে।
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">
          ৭. দোকানে প্রাপ্যতা:
        </h1>
        <p className="mt-5 md:text-lg">
          আমরা সঠিক প্রাপ্যতা সরবরাহ করার অনুমোদিত নই। আপনি যখন দোকানে যাবেন তখন
          এটি বিক্রি হয়ে গেলে আমরা দায়ী থাকব না।
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">
          ৮. বুকিং বিকল্প:
        </h1>
        <p className="mt-5 md:text-lg">
          আমরা কোনো বুকিং বিকল্প অনুসরণ করি না। আপনি সরাসরি আমাদের স্টক থেকে
          ক্রয় করতে পারেন।
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">
          ৯. বাতিলকৃত অর্ডার:
        </h1>
        <p className="mt-5 md:text-lg">
          ধারাবাহিকভাবে ৩ বার অর্ডার বাতিল করলে, আপনার বিস্তারিত তথ্য আমাদের
          সিস্টেমে ব্ল্যাকলিস্ট করা হবে এবং আপনি আর অর্ডার দিতে পারবেন না।
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">
          ১০. ব্র্যান্ড কপিরাইট:
        </h1>
        <p className="mt-5 md:text-lg">
          আমরা আমাদের পণ্যগুলোর জন্য ওয়েবসাইট, সোশ্যাল মিডিয়া এবং দোকানের সকল
          প্রদর্শনের উপর আমাদের কপিরাইট ও ট্রেডমার্কের অধিকার সংরক্ষণ করি।
        </p>
      </div>
      <ToggleMemu />
      <Footer />
    </div>
  );
};

export default page;
