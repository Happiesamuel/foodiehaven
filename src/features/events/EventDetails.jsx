import { TbTie } from "react-icons/tb";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { BsCake, BsPeople } from "react-icons/bs";
import { GiWineBottle } from "react-icons/gi";
import { BiDish } from "react-icons/bi";
import EventContainer from "./EventContainer";
import EventRow from "./EventRow";
function EventDetails() {
  const eventPlan = [
    {
      svg: <TbTie />,
      id: 1,
      title: "Corporate Events",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem consequatur, minus dolorum dolores numquam rerum magni, quas nobis voluptatibus veniam molestiae vel quod repellat natus ullam deserunt omnis officia labore!",
      link: "More info",
    },
    {
      svg: <RiCalendarScheduleLine />,
      id: 2,
      title: "Event Planning",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem consequatur, minus dolorum dolores numquam rerum magni, quas nobis voluptatibus veniam molestiae vel quod repellat natus ullam deserunt omnis officia labore!",
      link: "More info",
    },
    {
      svg: <BsCake />,
      id: 3,
      title: "Wedding Meals",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem consequatur, minus dolorum dolores numquam rerum magni, quas nobis voluptatibus veniam molestiae vel quod repellat natus ullam deserunt omnis officia labore!",
      link: "More info",
    },
    {
      svg: <GiWineBottle />,
      id: 4,
      title: "Bar Service",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem consequatur, minus dolorum dolores numquam rerum magni, quas nobis voluptatibus veniam molestiae vel quod repellat natus ullam deserunt omnis officia labore!",
      link: "More info",
    },
    {
      svg: <BsPeople />,
      id: 5,
      title: "Event Staffing",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem consequatur, minus dolorum dolores numquam rerum magni, quas nobis voluptatibus veniam molestiae vel quod repellat natus ullam deserunt omnis officia labore!",
      link: "More info",
    },
    {
      svg: <BiDish />,
      id: 6,
      title: "Event Staffing",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem consequatur, minus dolorum dolores numquam rerum magni, quas nobis voluptatibus veniam molestiae vel quod repellat natus ullam deserunt omnis officia labore!",
      link: "More info",
    },
  ];
  return (
    <EventContainer
      data={eventPlan}
      render={(event) => <EventRow event={event} key={event.id} />}
    />
  );
}

export default EventDetails;
