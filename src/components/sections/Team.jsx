import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { members } from "@/data/team";

const Team = () => {
  return (
    <section className='pt-10 pb-10 bg-bgGrayTeam'>
      <div className="container px-4">
        <div className="content">
          <h2 className="font-bold font_poppins text-3xl sm:text-4xl text-center text-white mt-4">Conheça Nossa Equipe</h2>
        </div>

        <div className="team_member flex flex-wrap justify-center gap-6 sm:gap-8 mt-12 sm:mt-16 max-w-[1400px] mx-auto">
          {members.map(member =>
            <div key={member.id} className="member shadow-teamShadow rounded-[20px] bg-white w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[400px] flex flex-col hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="image_container relative">
                <div className="aspect-[1.3] w-full overflow-hidden rounded-t-[20px]">
                  <img className="object-cover w-full h-full" src={member.image} alt={`${member.name} - ${member.formation}`} />
                </div>
                <div className="social_links flex items-center justify-between bg-white py-3 px-4 sm:py-4 sm:px-5 shadow-teamShadow rounded-[25px] absolute bottom-6 sm:bottom-8 gap-3 sm:gap-4 left-1/2 -translate-x-1/2">
                  <Link 
                    className="text-[#737588] hover:text-brandYellow hover:scale-110 transition-all duration-300 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" 
                    href={member.linkedin}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="text-xl sm:text-2xl" />
                  </Link>
                  <div className="line bg-[#E3E3E3] w-[1px] h-4" />
                  <a
                    href={member.email}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#737588] hover:text-brandYellow hover:scale-110 transition-all duration-300 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Email"
                  >
                    <MdEmail className="text-xl sm:text-2xl" />
                  </a>
                </div>
              </div>
              <div className='pt-6 sm:pt-7 pb-10 sm:pb-12 text-center px-4 flex-1 flex flex-col justify-start'>
                <h3 className='text-[#101A29] font-poppins text-2xl sm:text-[30px] font-semibold'>{member.name}</h3>
                <p className="text-[#737588] font-avenir text-base sm:text-lg mt-2">{member.formation}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
