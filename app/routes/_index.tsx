import { IconMail, IconMapPin, IconPhone, IconPlus, IconPrinter, IconWorldWww } from "@tabler/icons-react";
import React, { ComponentProps, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import PlaceholderImg from "~/../public/placeholder.jpg";

export default function CoverLetter() {
  const [headshot, setHeadshot] = useState('');
  const [phone, setPhone] = useState('+263 788 707 757');
  const [email, setEmail] = useState('anita.simoyi@yahoo.com');
  const [address, setAddress] = useState('Harare, Zimbabwe');
  const [website, setWebsite] = useState('');

  const [name, setName] = useState('Anita Simoyi');
  const [title, setTitle] = useState('Draughtswoman');
  const [profile, setProfile] = useState([
    'Highly motivated and detail-oriented Draughtswoman with years of experience in design and',
    'engineering across diverse industries, including timber framing, architecture, and mechanical',
    'engineering. Proven ability to master new software and technologies quickly, as demonstrated by',
    'rapid progression in MiTek skills from beginner to estimator and truss designer. Adept at',
    'collaborating with cross-functional teams to deliver high-quality designs and accurate',
    'documentation. Seeking a challenging role where I can contribute my expertise and continue to',
    'grow professionally.',
  ].join(" "));
  const [skills, setSkills] = useState([
    'Software Proficiency: AutoCAD, Revit, Inventor, Advanced Steel, Solidworks, MiTek 20/20, MiTek Pamir, Unilam Truss4',
    'Design & Engineering: 2D and 3D drafting and design, Timber truss design, Shop drawings, Engineering calculations, Roof layouts, Site inspections',
    'Estimation & Quoting: Project assessment, Material take-offs, Cost analysis, Quotation generation',
    'Inventory Management: Stock control, Inventory tracking, Dispatch coordination',
    "Other: Microsoft Office Suite, Excellent communication and interpersonal skills, Ability to work independently and under pressure, Class 2 driver's license",
  ]);
  const [projects, setProjects] = useState<string[]>([]);
  const [education, setEducation] = useState({
    period: '2007',
    institution: 'Chinhoyi University of Technology',
    degree: 'Advanced Diploma in Mechanical Engineering'
  });
  const [experiences, setExperiences] = useState([
    {
      company: 'Allied Timbers Gweru',
      job: 'Estimator',
      time: 'July 2023 - Present',
      points: [
        "Generated accurate quotations for [Number] timber truss projects using MiTek software, resulting in [Quantifiable result, e.g., increased sales by X% or secured Y new clients].",
        "Designed and engineered a variety of roof trusses in compliance with MiTek standards, ensuring structural integrity and cost-effectiveness.",
        "Conducted on-site measurements and inspections to assess project requirements and ensure accurate truss fabrication and installation.",
        "Produced detailed production sheets, roof layouts, and other essential site documentation for efficient project execution.",
        "Managed timber and MiTek product inventory, ensuring optimal stock levels and timely procurement."
      ]
    },
    {
      company: 'Hi-Tech Roofing',
      job: 'Timber Truss Designer (Junior Level)',
      time: 'Feb 2022 - June 2022',
      points: [
        "Completed on-the-job training in MiTek 20/20 software, quickly progressing from basic design to independent design of standard trusses.",
        "Instructed carpenters and assemblers on truss assembly based on MiTek designs, ensuring accurate interpretation of shop drawings.",
        "Maintained digital and physical libraries for drawings and documentation, improving organization and accessibility of project information."
      ]
    },
    {
      company: 'Architectural Design Services (Pvt) Ltd',
      job: 'Architectural Drafter (Part-time)',
      time: 'Sept 2021 - Feb 2022',
      points: [
        "Designed plans for residential buildings using AutoCAD and Revit, creating detailed floor plans, elevations, and sectional views.",
        "Specified dimensions, materials, and construction procedures, ensuring adherence to architectural standards and building codes."
      ]
    },
    {
      company: 'Ramkat Trailers',
      job: 'Solidworks Designer',
      time: 'Feb 2018 - Nov 2018',
      points: [
        "Created 3D models of truck bodies and trailers using Solidworks, contributing to the design and manufacturing process.",
        "Converted customer drawings into 3D models, facilitating efficient communication and collaboration."
      ]
    },
    {
      company: 'Atlas Starr Technologies',
      job: 'Mechanical Drafter',
      time: 'Mar 2015 - Oct 2017',
      points: [
        "Prepared working drawings for fluid mixing equipment according to ISO standards, ensuring accuracy and compliance with manufacturing requirements.",
        "Provided CAD support for new product development and product enhancement projects."
      ]
    },
    {
      company: 'Indo-Zim Technology Centre',
      job: 'Mechanical Technician',
      time: 'Jan 2009 - June 2014',
      points: [
        "Designed plastic injection molds using Solidworks and AutoCAD, contributing to the manufacturing of plastic components.",
        "Participated in the installation of equipment in engineering workshops across the country."
      ]
    }
  ]);

  function addPoint(index: number) {
    setExperiences(prev => {
      return prev.map((exp, i) => {
        if (i === index) {
          return { ...exp, points: [...exp.points, ""] }
        }
        return exp;
      })
    })
  }
  function removeWorkExperience(index: number) {
    setExperiences(prev => prev.filter((exp, i) => i !== index));
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="min-h-screen flex flex-row items-stretch bg-stone-200 p-8 px-2 pb-2 gap-6 print:p-0 text-stone-800 text-sm print:text-xs tracking-wide">
      <div className="h-full max-h-screen w-full md:w-80% lg:w-[70%] print:w-full flex flex-col items-stretch relative border-2 border-t-[#163A5F] rounded-md">
        <div className={twMerge(
          "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-[#163A5F] border-2",
          "flex flex-row items-center px-1 py-1 space-x-4 rounded-full shadow-xl print:hidden"
        )}>
          <div className="rounded-full px-4 py-1">
            <span className="text-[#163A5F] text-sm font-semibold">Simple CV</span>
          </div>
          <button
            type="button"
            onClick={handlePrint}
            className="rounded-full p-2 px-4 text-sm text-white bg-[#163A5F] flex flex-row items-center gap-2 shadow-xl"
          >
            <IconPrinter size={20} />
            <span>Print</span>
          </button>
        </div>
        <div className="grow grid grid-cols-3  bg-white rounded-md print:rounded-none overflow-auto shadow-xl">
          <div className="flex flex-col items-stretch bg-[#163A5F] pt-12 text-white p-6 gap-10">
            <div className="flex flex-col justify-center items-center">
              <Headshot imageUrl={headshot} onImageUpload={setHeadshot} />
            </div>
            <ContactDetails phone={phone} email={email} address={address} website={website} />
            <Skills skills={skills} />
            {!!projects.length && (
              <Projects projects={projects} />
            )}
            <Education education={education} />
          </div>
          <div className="col-span-2 flex flex-col items-stretch px-6 py-8 gap-12">
            <div className="flex flex-col items-start gap-1 uppercase pt-16 print:pt-12 px-4">
              <h1 className="text-4xl"><b>{name.split(' ')[0]}</b> {name.split(' ')[1]}</h1>
              <h2 className="text-xl font-light text-stone-500">{title}</h2>
              <div className="h-1 w-16 bg-[#163A5F]" />
            </div>
            <div className="flex flex-col items-start gap-8 pt-8 px-4">
              <Profile profile={profile} />
              <WorkExperience title={title} experiences={experiences} />
            </div>
          </div>
        </div>
      </div>
      <div className={twMerge(
        "print:hidden flex flex-col items-stretch lg:w-[30%] md:w-[20%] rounded-md bg-white",
        "border-2 border-t-[#163A5F] shadow-xl relative max-h-screen"
      )}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-[#163A5F] rounded-full px-6 py-2 shadow-xl">
          <span className="text-[#163A5F] font-semibold">Enter Your Details</span>
        </div>
        <div className="h-full flex flex-col items-stretch overflow-auto p-6 gap-4">
          <EditableField label="Name" value={name} onChange={setName} />
          <EditableField label="Title" value={title} onChange={setTitle} />
          <EditableField label="Phone" value={phone} onChange={setPhone} />
          <EditableField label="Email" value={email} onChange={setEmail} />
          <EditableField label="Address" value={address} onChange={setAddress} />
          <EditableField label="Website" value={website} onChange={setWebsite} />
          <EditableTextArea label="Profile" value={profile} onChange={setProfile} />
          <EditableList label="Skills" items={skills} onChange={setSkills} />
          <EditableList label="Projects" items={projects} onChange={setProjects} />
          <EditableEducation education={education} onChange={setEducation} />
          <EditableExperiences experiences={experiences} onChange={setExperiences} addPoint={addPoint} removeItem={removeWorkExperience} />

        </div>
      </div>
    </div>
  )
}


type EditableFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

function EditableField({ label, value, onChange }: EditableFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="font-semibold">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border rounded bg-black/10"
      />
    </div>
  );
}

type EditableTextAreaProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

function EditableTextArea({ label, value, onChange }: EditableTextAreaProps) {
  return (
    <div className="flex flex-col">
      <label className="font-semibold">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border rounded bg-black/10"
        rows={4}
      />
    </div>
  );
}

type EditableListProps = {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
};

function EditableList({ label, items, onChange }: EditableListProps) {
  const handleItemChange = (index: number, value: string) => {
    const newItems = [...items];
    newItems[index] = value;
    onChange(newItems);
  };

  const addItem = () => {
    onChange([...items, ""]);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold">{label}</label>
      {items.map((item, index) => (
        <input
          key={index}
          type="text"
          value={item}
          onChange={(e) => handleItemChange(index, e.target.value)}
          className="p-2 border rounded bg-black/10"
        />
      ))}
      <button
        onClick={addItem}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        Add Item
      </button>
    </div>
  );
}

type EditableEducationProps = {
  education: {
    period: string;
    institution: string;
    degree: string;
  };
  onChange: (education: {
    period: string;
    institution: string;
    degree: string;
  }) => void;
};

function EditableEducation({ education, onChange }: EditableEducationProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="education-period" className="font-semibold">Education</label>
      <input
        id="education-period"
        type="text"
        value={education.period}
        onChange={(e) => onChange({ ...education, period: e.target.value })}
        className="p-2 border rounded bg-black/10"
        placeholder="Period"
      />
      <input
        type="text"
        value={education.institution}
        onChange={(e) => onChange({ ...education, institution: e.target.value })}
        className="p-2 border rounded bg-black/10"
        placeholder="Institution"
      />
      <input
        type="text"
        value={education.degree}
        onChange={(e) => onChange({ ...education, degree: e.target.value })}
        className="p-2 border rounded bg-black/10"
        placeholder="Degree"
      />
    </div>
  );
}

type Experience = {
  company: string;
  time: string;
  job: string;
  points: string[];
};

type EditableExperiencesProps = {
  experiences: Experience[];
  onChange: (experiences: Experience[]) => void;
  addPoint: (index: number) => void;
  removeItem: (index: number) => void;
};

function EditableExperiences({ experiences, onChange, addPoint, removeItem }: EditableExperiencesProps) {
  const handleExperienceChange = (
    index: number,
    field: keyof Experience,
    value: string | string[]
  ) => {
    const newExperiences = [...experiences];
    newExperiences[index][field] = value as never;
    onChange(newExperiences);
  };

  const addExperience = () => {
    onChange([...experiences, { company: "", time: "", job: "", points: [""] }]);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="work-experience" className="font-semibold">Work Experience</label>
      <div className="flex flex-col items-stretch gap-4">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col gap-2">
            <input
              type="text"
              value={exp.company}
              onChange={(e) => handleExperienceChange(index, "company", e.target.value)}
              className="p-2 border rounded bg-black/10"
              placeholder="Company"
            />
            <input
              type="text"
              value={exp.job}
              onChange={(e) => handleExperienceChange(index, "job", e.target.value)}
              className="p-2 border rounded bg-black/10"
              placeholder="Job Title"
            />
            <input
              type="text"
              value={exp.time}
              onChange={(e) => handleExperienceChange(index, "time", e.target.value)}
              className="p-2 border rounded bg-black/10"
              placeholder="Time Period"
            />
            {exp.points.map((point, pIndex) => (
              <div key={pIndex} className="flex flex-row items-center gap-2">
                <input
                  type="text"
                  value={point}
                  onChange={(e) => {
                    const newPoints = [...exp.points];
                    newPoints[pIndex] = e.target.value;
                    handleExperienceChange(index, "points", newPoints);
                  }}
                  className="p-2 border border-l-blue-500 border-l-2 rounded bg-black/10 grow"
                  placeholder="Point"
                />
              </div>
            ))}
            <div className="flex flex-row items-center">
              <button
                type="button"
                onClick={() => addPoint(index)}
                className="bg-blue-500/20 rounded-md px-2 py-1 flex flex-row justify-center items-center gap-2"
              >
                <IconPlus className="text-blue-500" />
                <span>Add Point</span>
              </button>
              <div className='grow' />
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="bg-red-500/20 rounded-md px-2 py-1 flex flex-row justify-center items-center gap-2"
              >
                <IconPlus className="text-red-500" />
                <span>Remove Item</span>
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={addExperience}
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Add Experience
        </button>
      </div>
    </div>
  );
}

interface HeadshotProps {
  imageUrl: string;
  onImageUpload: (image: string) => void;
}
function Headshot({ imageUrl, onImageUpload }: HeadshotProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const result = event.target?.result as string;
        onImageUpload(result);
      } catch (error) {
        window.alert("Failed to upload image. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    reader.onerror = () => {
      window.alert("An error occurred while reading the file. Please try again.");
      setIsLoading(false);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <label htmlFor="headshot-upload" className="cursor-pointer">
        <div className="flex flex-col justify-center items-center relative group rounded-full">
          <div className={twMerge(
            "absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-black/60",
            "group-hover:flex flex-col justify-center items-center p-4 rounded-full w-2/3 hidden",
          )}>
            <span className="text-white">Change photo</span>
          </div>
          <img
            src={imageUrl || PlaceholderImg}
            alt="Headshot"
            className={twMerge(
              "w-2/3 aspect-square flex flex-col justify-center items-center",
              "rounded-full bg-white p-1 object-cover",
              isLoading ? "opacity-50" : ""
            )}
          />
          {isLoading && <span className="text-sm text-gray-500">Uploading...</span>}
        </div>
      </label>
      <input
        id="headshot-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </>
  );
}

interface SkillsProps {
  skills: string[];
}
function Skills({ skills }: SkillsProps) {
  return (
    <Section>
      <SectionTitle color="white">Skills</SectionTitle>
      <ul className="list-none flex flex-col items-stretch gap-4">
        {skills.map((skill, index) => (
          <li key={index}>&middot; {skill}</li>
        ))}
      </ul>
    </Section>
  );
}

interface ProjectsProps {
  projects: string[];
}
function Projects({ projects }: ProjectsProps) {
  return (
    <Section>
      <SectionTitle color="white">Projects</SectionTitle>
      <ul className="list-none flex flex-col items-stretch gap-4">
        {projects.map((project, index) => (
          <li key={index}>&middot; {project}</li>
        ))}
      </ul>
    </Section>
  );
}

interface EducationProps {
  education: { period: string; institution: string; degree: string };
}
function Education({ education }: EducationProps) {
  return (
    <Section>
      <SectionTitle color="white">Education</SectionTitle>
      <div className="flex flex-col items-stretch gap-2">
        <span>{education.period}</span>
        <span className="font-semibold">{education.institution}</span>
        <span>{education.degree}</span>
      </div>
    </Section>
  );
}

interface ContactDetailsProps {
  phone: string;
  email: string;
  address: string;
  website: string;
}
function ContactDetails({ phone, email, address, website }: ContactDetailsProps) {
  const contactDetails: [ReactNode, string][] = [
    [<IconPhone key="phone" size={20} className="text-white" />, phone],
    [<IconMail key="email" size={20} className="text-white" />, email],
    [<IconMapPin key="home" size={20} className="text-white" />, address],
    website ? [<IconWorldWww key="title" size={20} className="text-white" />, website] : undefined,
  ].filter(Boolean) as [ReactNode, string][];
  return (
    <Section>
      <SectionTitle color="white">Contact</SectionTitle>
      {contactDetails.map(([Icon, label], index) => (
        <div key={index} className="flex flex-row items-center gap-4">
          <div className="flex flex-col justify-center items-center shrink-0">
            {Icon}
          </div>
          <span>{label}</span>
        </div>
      ))}
    </Section>
  );
}

interface SectionProps extends ComponentProps<'div'> { }
function Section(props: SectionProps) {
  const { children, className, ...rest } = props;
  return (
    <div className={twMerge("flex flex-col items-stretch gap-4", className)} {...rest}>
      {children}
    </div>
  );
}

interface SectionTitleProps extends ComponentProps<'div'> {
  color: 'blue' | 'white';
}
function SectionTitle(props: SectionTitleProps) {
  const { children, className, color, ...rest } = props;

  const borderColor = twMerge(color === 'blue' ? 'border-[#163A5F]' : 'border-white');
  const textColor = twMerge(color === 'blue' ? 'text-[#163A5F]' : 'text-white');

  return (
    <div className={twMerge("border-b border-white py-1", borderColor, className)} {...rest}>
      <span className={twMerge('text-xl font-semibold uppercase', textColor)}>
        {children}
      </span>
    </div>
  );
}

interface ProfileProps {
  profile: string;
}
function Profile({ profile }: ProfileProps) {
  return (
    <Section>
      <SectionTitle color="blue">Profile</SectionTitle>
      <span className="leading-relaxed">{profile}</span>
    </Section>
  );
}

interface WorkExperienceProps {
  experiences: { company: string; job: string; time: string; points: string[] }[];
  title: string, 
}
function WorkExperience({ experiences, title }: WorkExperienceProps) {
  return (
    <Section>
      <SectionTitle color="blue">Work Experience</SectionTitle>
      <div className="flex flex-col items-stretch gap-6">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} title={title} {...exp} />
        ))}
      </div>
    </Section>
  );
}

interface ExperienceItemProps extends ComponentProps<'div'> {
  company: string;
  job: string;
  title: string;
  time: string;
  points: ReactNode[];
}
function ExperienceItem(props: ExperienceItemProps) {
  const { company, job, title, time, points } = props;
  return (
    <div className="flex flex-col items-stretch gap-2">
      <div className="flex flex-row items-end gap-2">
        <div className="flex flex-col items-start">
          <span className="text-base print:text-sm font-semibold">{company}</span>
          <span className="text-stone-500">{job || title}</span>
        </div>
        <div className="grow" />
        <span className="text-stone-500 text-end">{time}</span>
      </div>
      <ul className="list-disc flex flex-col items-stretch gap-2">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}