import MemberCard from "./MemberCard"

interface MemberCards {
  description: string,
  jobTitle: string,
  name: string,
  image: any,
  [key: string]: any,
}

interface OurTeamPageMembersProps {
  componentData: {
    card: MemberCards[]
  }
}

export default function OurTeamPageMembers({componentData}: OurTeamPageMembersProps) {
  return (
    <div className="mt-16 md:mt-0 max-w-[1200px] md:mx-auto">
      { componentData.card && componentData.card.map((content, index) => {
        const odd = index % 2 === 0
         return <MemberCard description={content.description} jobTitle={content.jobTitle} name={content.name} image={content.image} odd={ odd } key={index} />}) }
    </div>
  )
}
