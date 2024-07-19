import Card from "./Card";
import organization from '../assets/NewDesignImages/organization.svg'
import integration from '../assets/NewDesignImages/integration.svg'
import efficiency from '../assets/NewDesignImages/efficiency.svg'
import collaboration from '../assets/NewDesignImages/team.svg'
import reminder from '../assets/NewDesignImages/reminder.svg'
import tracker from '../assets/NewDesignImages/progress.svg'
export default function Choosen() {
  return (
    <div className="mt-32">
      <h1 className="text-center font-semibold text-3xl text-custom-purplish-blue">
        Why Choose Us
      </h1>
      <p className="text-center mt-4 text-[#141522]  text-normal">
        Malva app can greatly enhance your productivity and organization whether
        for <br /> your personal use or collectively as a team
      </p>
      <div>
        <div className="flex mt-10 items-center gap-20">
          <Card 
            chooseImage={organization}
            chooseH1={'Organization'}
            firstBreak={'Malva helps you to organize,'}
            secondBreak={'tasks in one place, makingit easy'}
            thirdBreak={'to see what needs to be done and'}
            finalBreak={'prioritize effectively'}
          />
          <Card 
            chooseImage={integration}
            chooseH1={'Integration'}
            firstBreak={'Malva app integrate with other'}
            secondBreak={'tools and platforms you use, such'}
            thirdBreak={'as calendars, email, and chatting'}
            finalBreak={'app, creating a seamless workflow'}
          />
             
          <Card 
            chooseImage={efficiency}
            chooseH1={'Efficiency'}
            firstBreak={'By providing a structured way to'}
            secondBreak={'manage tasks, malva can increase'}
            thirdBreak={'efficiency and reduce time spent'}
            finalBreak={'on figuring out what to do next'}
          />
        </div>
        <div className="flex  items-center gap-20">
          <Card 
            chooseImage={collaboration}
            chooseH1={'Collaboration'}
            firstBreak={'Malva support collaboration,'}
            secondBreak={'allowing teams to share tasks,'}
            thirdBreak={'assign responsibilities, and track'}
            finalBreak={'progress collectively'}
          />
          <Card 
            chooseImage={reminder}
            chooseH1={'Reminders and Notifications'}
            firstBreak={'Malva comes with reminder'}
            secondBreak={'features to keep you on track and'}
            thirdBreak={'notify you of approaching'}
            finalBreak={'deadlines'}
          />
          <Card 
            chooseImage={tracker}
            chooseH1={'Tracking Progress'}
            firstBreak={'You can track your tasks and projects'}
            secondBreak={'progress on the malva app, which provides'}
            thirdBreak={' a sense of accomplishment'}
            finalBreak={'and helps you stay motivated'}
          />
        </div>
        <div className="flex items-center gap-20">
          <Card 
            chooseImage={integration}
            chooseH1={'Accessibility'}
            firstBreak={'Malva is accessible across devices'}
            secondBreak={'(desktop, mobile, tablet), so you'}
            thirdBreak={'can manage tasks on the go'}
          />
          <Card 
            chooseImage={integration}
            chooseH1={'Time Management'}
            firstBreak={'Malva helps with time'}
            secondBreak={'Malva helps with time management by breaking down'}
            thirdBreak={'tasks into smaller steps and'}
            finalBreak={'allocating time accordingly'}
          />
          <Card 
            chooseImage={integration}
            chooseH1={'Goal Setting'}
            firstBreak={'Malva allow you to set goals and'}
            secondBreak={'milestones, helping you work'}
            thirdBreak={'towards larger objectives with'}
            finalBreak={'clarity'}
          />
        </div>
      </div>
    </div>
  );
}
