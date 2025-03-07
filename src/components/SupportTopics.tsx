

const topics = [
  {
    title: 'Order Status',
    description: 'Still waiting on a box of bricks? It’s quick and easy to track down your package.',
  },
  {
    title: 'Deliveries, Returns & Cancellations',
    description: 'Find everything you need to know about deliveries, delays, returns and cancellations.',
  },
  {
    title: 'Missing Bricks',
    description: 'Missing a wheel or a wing? We’ll have new parts sent out right away.',
  },
  {
    title: 'Building Instructions',
    description: 'Download building instructions for thousands of sets, old and new.',
  },
  {
    title: 'Broken Bricks',
    description: 'You can request replacement pieces free of charge.',
  },
  {
    title: 'Help Topics',
    description: 'Need to know more? We\'ve got lots of answers to common questions.',
  },
  {
    title: 'Find a LEGO Store',
    description: 'Find your local LEGO store and learn about upcoming events.',
  },
  {
    title: 'Buy Bricks',
    description: 'Visit Pick a Brick to find the parts you need to finish your build.',
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with one of our LEGO experts.',
  }
];

export const SupportTopics = () => {
  return (
    <section>
      <ul className="grid grid-cols-1 md:grid-cols-3 m-8">
        {topics.map((topic, index) => (
          <a href='#' key={index} className="group m-3 border border-neutral-400 p-8 hover:bg-gray-200 animate-color duration-100 cursor-pointer">
            <h3 className="text-2xl font-bold mb-3 group-hover:underline">{topic.title}</h3>
            <p>{topic.description}</p>
          </a>
        ))}
      </ul>
    </section>
  );
};
