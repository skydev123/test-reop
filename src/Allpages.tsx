import { Link, useLocation } from "react-router-dom";
import { data } from "./data/data";
import { RootData } from "./Interfaces/interfaces";

const Card = ({ items, name, path }: RootData) => {
  return (
    <div className="flex-row justify-evenly">
      
      {" "}
      <Link to={`/${path}`} className="block  bg-orange-400 rounded-xl p-10 my-3">
        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          {name}
        </h3>

        <p className="mt-2 max-w-sm text-gray-700">{path}</p>
      </Link>
      {items
        ?.filter((x) => x.type === "file")
        .map((info) => (
          <Card
            items={info.items}
            name={info.name}
            path={info.path}
            key={Math.floor(Math.random() * 1000)}
          />
        ))}
    </div>
  );
};

const Title = () => {
  const location = useLocation();

  const FileTItleCard = () => {
    return (
      <>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="h-56 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <h3 className="mt-0.5 text-lg text-gray-900 font-extrabold">
              {location.pathname}
            </h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>
      </>
    );
  };
  const pageData = data.items?.filter((x) => x.type === "folder");

    return (
      <>
        {" "}
        <FileTItleCard />
        <h4>Explore others Files</h4>
        {pageData?.map((info) => (
          <Card
            items={info.items}
            name={info.name}
            path={info.path}
            key={Math.floor(Math.random() * 1000)}
          />
        ))}
      </>
    );
};

export const RootApp = () => {
  return (
    <>
      <Title />
    </>
  );
};

export const NoMatch = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
    </div>
  );
};
