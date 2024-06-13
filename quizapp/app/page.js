import Link from "next/link";

export default function Home() {
    return (
        <main>
            <div className="container">
                <h1>اپلیکیشن Quiz</h1>
                <Link href="/quiz">
                    <button>شروع آزمون</button>
                </Link>
            </div>
        </main>
    );
}
