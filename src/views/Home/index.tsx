import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/about">about</Link>
      </nav>
    </>
  );
}
