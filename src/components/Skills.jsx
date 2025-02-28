import React from "react";
import styled from "styled-components";
// import { skills } from "../constants";
import Tilt from 'react-parallax-tilt';


const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      // {
      //   name: "Bootstrap",
      //   image:
      //     "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      // },
      {
        name: "Tailwind",
        image:
          "https://imgs.search.brave.com/nVyDpYrgvlKZUOIsHihVIipKzvjG4Rg7EXHWPPGy284/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvODJmYTczY2Fi/MDNjOWMxNTVmZTRl/ODgzMDMyYTU0MGI2/MGYxZTFkNzhkMWZl/YmQ5OWNkN2E3Mzcx/NWUzY2VkYi90YWls/d2luZGNzcy5jb20v",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "TypeScript",
        image:
          "https://imgs.search.brave.com/7mZ5KbtgXwUmyMVpggFAtFqWTh_aIk4F-p3edyjZwZE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzRjL1R5/cGVzY3JpcHRfbG9n/b18yMDIwLnN2Zy8y/MjBweC1UeXBlc2Ny/aXB0X2xvZ29fMjAy/MC5zdmcucG5n",
      },
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "Next Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
      // {
      //   name: "Vue Js",
      //   image:
      //     "https://imgs.search.brave.com/NXecJpjCJdfSCBmtvJEnr3rUK9f2RQEos88AZUElwkI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L1Z1/ZS5qc19Mb2dvXzIu/c3ZnLzIyMHB4LVZ1/ZS5qc19Mb2dvXzIu/c3ZnLnBuZw",
      // },
      // {
      //   name: "Svelte",
      //   image:
      //     "https://imgs.search.brave.com/HfzXgkkOnLw1bNDqZemXvvKYITh4Ajm-938-3gxc81U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8xLzFiL1N2/ZWx0ZV9Mb2dvLnN2/Zy8yMjBweC1TdmVs/dGVfTG9nby5zdmcu/cG5n",
      // },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Bun Js",
        image: "https://imgs.search.brave.com/uE0cNFoc-_ZgldKvABXr9q0Zv5NvZ5kt4IPoI0j_Zt0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/ZS9lYy9CdW5fSlNf/bG9nby5wbmcvNTEy/cHgtQnVuX0pTX2xv/Z28ucG5n",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Flask",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png",
      },
      {
        name: "Fast API",
        image:
          "data:image/png;base64,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",
      },
      // {
      //   name: "Django",
      //   image:
      //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFFyY16N5NRhzoG24RqB7x8Ok2t8Bdgs-tuMsOBXS2Q&s",
      // },
    ],
  },
  {
    title: "Database:",
    skills: [
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "PostgreSQL",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "AWS RDS",
        image:
          "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
      },
      // {
      //   name: "Firebase",
      //   image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      // },
      // {
      //   name: "Graph Ql",
      //   image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      // },
      {
        name: "Redis",
        image: "https://imgs.search.brave.com/dFUP4LQrBLYy1rn3bVRDuMuCP6YN1s0nQ_0Db9vMmTk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9lL2VlL1Jl/ZGlzX2xvZ28uc3Zn/LzIyMHB4LVJlZGlz/X2xvZ28uc3ZnLnBu/Zw",
      },
      {
        name: "Prisma",
        image: "https://imgs.search.brave.com/1B6_RXEhS32GrA0ejz_BvRceWU7SOfObVHG64ikx-p4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85LzlmL1By/aXNtYV9hcHBfbG9n/by5wbmcvMjIwcHgt/UHJpc21hX2FwcF9s/b2dvLnBuZw",
      },
      // {
      //   name: "Kafka",
      //   image: "https://imgs.search.brave.com/pPEdJgfM5N9y-AsoOYXXkIDpNorWhEigWqDtPneN2yw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzA1L0Fw/YWNoZV9rYWZrYS5z/dmcvMjIwcHgtQXBh/Y2hlX2thZmthLnN2/Zy5wbmc",
      // },
    ],
  },


  // {
  //   title: "DevOps",
  //   skills: [
      
  //     {
  //       name: "Google Cloud",
  //       image:
  //         "https://static-00.iconduck.com/assets.00/google-cloud-platform-logo-icon-2048x1824-pg4wzspq.png",
  //     },
      
  //     {
  //       name: "Jenkins",
  //       image:
  //         "https://toppng.com/uploads/preview/jenkins-logo-11609365847mufysaivph.png",
  //     },
      
  //   ],
  // },


  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },

      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "AWS",
        image:
          "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
      },
      {
        name: "Nginx",
        image: "https://download.logo.wine/logo/Nginx/Nginx-Logo.wine.png",
      },

      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      // {
      //   name: "VS Code",
      //   image:
      //     "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      // },
      {
        name: "Postman",
        image:
          "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
      },
      
      // {
      //   name: "Android Studio",
      //   image: "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
      // },
    ],
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  console.log("skilssss", skills)
  return (
    <Container id="Skills">
      <Wrapper>
        {/* <Title>Skill's</Title> */}
        {/* <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Here are some of my skills on which I have been working on for the
          past 3+ years.
        </Desc> */}
        <SkillsContainer>
          {skills?.map((skill, index) => (
            <Tilt key={index}>
              <Skill>
                <SkillTitle>{skill?.title}</SkillTitle>
                <SkillList>
                  {skill?.skills?.map((item, index_x) => (
                    <SkillItem key={index_x}>
                      <SkillImage src={item.image} alt={item.name} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>

      </Wrapper>
    </Container>
  );
};

export default Skills;
