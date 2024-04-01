import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";

export const BasicBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((item) => item);

  return (
    <div role="presentation">
      <Breadcrumbs separator=">" aria-label="breadcrumb" className="py-4">
        <a href="/" className=" rounded-md p-2 bg-[#777] text-white">
          Root
        </a>

        {pathnames.map((item, _idx) => {
          const last = _idx === pathnames.length - 1;
          const to = `/${pathnames.slice(0, _idx + 1).join("/")}`;

          return (
            <div key={Math.floor(Math.random() * 1000)}>
              {last ? (
                <>
                  <span className="rounded-md p-2 bg-[#777] text-white">
                    {item}
                  </span>
                </>
              ) : (
                <Link underline="hover" color="inherit" href={`${to}`}>
                  <span className="rounded-md p-2 bg-[#777] text-white">
                    {item}
                  </span>
                </Link>
              )}
            </div>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};
