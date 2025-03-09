import Footer from "@/components/Footer";
import Link from "next/link";
import ToggleMemu from "@/components/ToggleMemu";

const page = () => {
  return (
    <div>
      <div className="border-b py-5">
        <div className="container mx-auto px-2 md:px-4 flex items-center justify-between">
          <div></div>
          <div className="flex items-center gap-4">
            <Link href="/">Home</Link>
            <Link href="/terms-and-condition">Terms & Condition</Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-2 md:px-4 mb-10">
        <h1 className="text-2xl font-semi-bold mt-8 md:text-4xl">
          1. Product information:
        </h1>
        <p className="mt-5 md:text-lg">
          We attempt to be as accurate as possible in the description of the
          products displayed on the Website. Please note that we cannot be held
          responsible for color shade differences that occur from screen
          resolution issues. We are not authorized to give unedited pictures via
          social media. Although we attempt to display colors accurately, we
          cannot guarantee that your computer’s display of the images accurately
          reflects the true color of the products. The sizes may vary depending
          on different designs. <br /> Please contact our Customer Service
          Advisors if you would like more information about a product.
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">
          2. Purchase Terms:
        </h1>
        <p className="mt-5 md:text-lg">
          The Website allows you to check your order and correct any errors
          before completing a purchase or transaction. Please take the time to
          read and check your order at each page of the order process as you are
          responsible for ensuring that the information is accurate.
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">
          3. Tax and Charges:
        </h1>
        <p className="mt-5 md:text-lg">
          Depending on your delivery address, different taxation rules and
          additional charges may apply.
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">
          4. Order Delivery:
        </h1>
        <p className="mt-5 md:text-lg">
          The delivery is controlled by the courier services and we have no
          control over it. We do not know the exact date and time of delivery.{" "}
          <br />
          Our parcels are sent via courier service, so we really cannot control
          when they deliver the products. When they call you, please let them
          know your preferred time and date of delivery. The order cannot be
          delayed. It can take maximum 72 hours!
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">
          5. Guarantee/Warranty:
        </h1>
        <p className="mt-5 md:text-lg">
          We can ensure that all our products are thoroughly tested before the
          launch to ensure longevity and durability of the product. Please note
          that the durability and longevity of any product depends on the care
          and usage of the product. We will not be held responsible for any
          issues occurring due to misuse or improper care of any product.
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">6. Price:</h1>
        <p className="mt-5 md:text-lg">
          Price and availability information provided on this website is subject
          to change without notice. All prices quoted are in Bangladeshi Taka.
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">
          7. Availability in Store:
        </h1>
        <p className="mt-5 md:text-lg">
          We aren’t authorized to provide exact availability. We will not be
          taking any responsibility if they are sold out by the time you visit.
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">
          8. Booking Options:
        </h1>
        <p className="mt-5 md:text-lg">
          We don’t follow booking option. You can purchase directly from our
          stock.
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">
          9. Cancelled Order:
        </h1>
        <p className="mt-5 md:text-lg">
          3 consecutive cancellations will result in your details being
          blacklisted from our system and you will not be able to order with us
          further.
        </p>
        <h1 className="text-2xl font-semi-bold mt-14 md:text-4xl">
          10. Brand Copyrights:
        </h1>
        <p className="mt-5 md:text-lg">
          We hold our copyrights & trademarks exclusively for our products on
          any of the display- website, social media, store.
        </p>
      </div>
      <ToggleMemu />
      <Footer />
    </div>
  );
};

export default page;
