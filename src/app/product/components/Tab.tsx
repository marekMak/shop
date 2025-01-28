import React from "react";

const Tab = () => {
  return (
    <div role="tablist" className="tabs tabs-bordered">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Description"
      />
      <div role="tabpanel" className="tab-content p-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos itaque
        odio nesciunt maiores quis provident aut. Deserunt numquam nemo magni
        facere animi voluptatem, accusantium asperiores laboriosam pariatur
        placeat sapiente veniam!
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab "
        aria-label="Additional Information"
        defaultChecked
      />
      <div role="tabpanel" className="tab-content p-10">
        Lorem Additional Information ipsum dolor sit amet consectetur
        adipisicing elit. Cumque quod, magnam laudantium earum doloribus
        repudiandae quasi. Ex mollitia debitis distinctio, vitae consequatur,
        quisquam, molestiae consectetur ipsam aut repellendus expedita
        perferendis?
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Reviews"
      />
      <div role="tabpanel" className="tab-content p-10">
        Lorem Reviews, ipsum dolor sit amet consectetur adipisicing elit.
        Officiis tempora dolorum dolorem reiciendis, rem ad beatae cum
        voluptatibus id, accusamus maiores eos itaque blanditiis pariatur iusto
        officia natus quam. Doloremque!
      </div>
    </div>
  );
};

export default Tab;
