const Sidebar = (props) => {
  const itemList = [
    {
      title: "products",
      color: "red",
    },
    {
      title: "about us",
      color: "blue",
    },
    {
      title: "contact us",
      color: "green",
    },
  ];

  const handleClick = (title) => {
    props.changeMenu(title);
  };

  return (
    <ul className="sidebar">
      {itemList.map((item) => {
        return (
          <li
            onClick={() => handleClick(item.title)}
            style={{ color: item.color }}
          >
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
