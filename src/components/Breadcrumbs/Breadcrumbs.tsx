import React, { FC } from "react";
import s from "./Breadcrumbs.module.css";
import useBreadcrumbs, {
  BreadcrumbComponentType,
} from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";

type CreateComponent = (
  items: { id: number; name: string }[]
) => BreadcrumbComponentType;

type Props = {
  name: string;
  path: string;
  selectorId: { id: number; name: string }[];
  productId: { id: number; name: string }[];
};

export const Breadcrumbs: FC<Props> = (props) => {
  const createComponent: CreateComponent = function (items) {
    return (breadcrumbsProps) => {
      if (!breadcrumbsProps.match.params.id) {
        return null;
      }
      const productId = breadcrumbsProps.match.params.productId;
      const id = productId
        ? Number(productId)
        : Number(breadcrumbsProps.match.params.id);
      const item = items.find((item) => item.id === id);
      if (!item) {
        return null;
      }
      return <span>{item.name}</span>;
    };
  };

  const routes = [
    { path: "/", breadcrumb: "Главная" },
    { path: props.path, breadcrumb: props.name },
    {
      path: props.path + "/:id/products",
      breadcrumb: createComponent(props.selectorId),
    },
    {
      path: props.path + "/:id/products/:productId",
      breadcrumb: createComponent(props.productId),
    },
  ];

  const breadcrumbs = useBreadcrumbs(routes, {
    disableDefaults: true,
  });

  return (
    <div className={s.breadcrumbs}>
      {breadcrumbs.map((data) => {
        return (
          <span key={data.match.pathname}>
            <Link className={s.link} to={data.match.pathname}>
              {data.breadcrumb}
              {" > "}
            </Link>
          </span>
        );
      })}
    </div>
  );
};
