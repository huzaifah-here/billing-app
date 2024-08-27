import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center">
        <Link href="/dashboard">
          {" "}
          {/* Specify the destination page here */}
          <button className="btn">Go to Dashboard</button>{" "}
          {/* Add classes as needed */}
        </Link>
      </div>
    </>
  );
}
