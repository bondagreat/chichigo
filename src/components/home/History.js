import Image from "../../images/SCR-01.png";

export default function History() {
  return (
    <>
      <div className="container min-w-728 p-12">
        <p className="text-xl mb-2">Our History</p>
        <div className="flex justify-between">
          <div className="w-7/12 top-0">
            <img className="rounded-xl" src={Image}></img>
          </div>
          <div className="w-4/12 px-4">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              eleifend euismod augue quis maximus. Duis venenatis sollicitudin
              facilisis. Mauris faucibus tincidunt lobortis. Sed eget ante est.
              Sed luctus tincidunt ante vel vulputate. Vivamus sagittis
              porttitor quam ac vestibulum. Nunc malesuada, dolor sit amet porta
              lobortis, velit elit porttitor erat, quis gravida est risus ut
              erat. Integer ornare eget odio sit amet egestas. Nulla ante eros,
              porttitor sit amet finibus mollis, posuere at risus.
            </span>
            <br />
            <br />
            <span>
              Aliquam viverra pellentesque pretium. Cras euismod magna sed nibh
              fermentum, tristique convallis nibh posuere. Duis quis tincidunt
              tellus, eget egestas neque. Nullam massa mauris, scelerisque
              aliquet rutrum.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
