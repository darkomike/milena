import Link from 'next/link';

const Breadcrumb = ({ crumbs }) => {
  return (
    <nav className="flex px-16 my-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {crumbs.map((crumb, index) => (
          <li key={index} className="crumb-tab">
            <Link href={crumb.href}>
              <p >{crumb.name}</p>
            </Link>
            {index < crumbs.length - 1 && <span className="mx-1">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

export let crumbs = [
    {
        "href":"/",
        "name":"Home"
    },
    {
        "href":"/contact",
        "name":"Contact"
    },
    {
        "href":"/register",
        "name":"Sign Up"
    },
    {
        "href":"/about",
        "name":"About"
    },
];