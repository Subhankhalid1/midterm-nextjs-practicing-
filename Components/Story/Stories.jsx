import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Rana Subhan Khan",
    src: "https://scontent.flhe7-1.fna.fbcdn.net/v/t1.6435-9/138641699_2894019840835098_1435947639677788377_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CWCiB3C83L0AX8dW-WH&_nc_ht=scontent.flhe7-1.fna&oh=00_AT9jY7lhbvmRsW3_FhIbY77tlBuhey5un4-M5NUoKMIBHA&oe=634DB2E0",
    profile:
      "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2454&q=80",
  },
  {
    name: "Subhan Khalid",
    src: "https://scontent.flhe7-2.fna.fbcdn.net/v/t39.30808-6/307342544_3341199446117133_7148235704242644617_n.jpg?stp=cp6_dst-jpg_s1080x2048&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=BGCtRFtt544AX8IADBx&_nc_ht=scontent.flhe7-2.fna&oh=00_AT-ogbEywsQ_cABkmrYZc_upq_HSo7sM8oItSsQjZuTaJg&oe=632B2E77",
    profile:
      "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2454&q=80",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
  {
    name: "Rana Subhan Khan",
    src: "https://scontent.flhe7-1.fna.fbcdn.net/v/t1.6435-9/138641699_2894019840835098_1435947639677788377_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CWCiB3C83L0AX8dW-WH&_nc_ht=scontent.flhe7-1.fna&oh=00_AT9jY7lhbvmRsW3_FhIbY77tlBuhey5un4-M5NUoKMIBHA&oe=634DB2E0",
    profile:
      "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2454&q=80",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
];

function Stories() {
  return (
    <div style={{ display: 'flex',
  justifyContent: 'center',
      gap: '0.3rem'}}>
      {stories.map((story, index) => (
        <StoryCard key={index} name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;