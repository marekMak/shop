interface TabProps {
  description: string;
  additionalInformation: string;
}

const Tab = ({ description, additionalInformation }: TabProps) => {
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
        {description}
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
        {additionalInformation}
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
