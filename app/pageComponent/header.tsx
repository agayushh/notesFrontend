import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-2xl font-medium text-gray-900 mb-4 font-caveat">
        Seamless way to capture your ideas
      </h1>
      <p className="text-5xl font-medium text-black font-archivo mb-8">
        Every Conversation into <br />{" "}
        <span className="mt-2 flex items-center justify-center">
          {" "}
          Actionable Notes
        </span>
      </p>

      <p className="text-xl font-light text-black font-archivo mb-3">
        Act on your ideas with AI-powered note-taking. Turn conversations into
        action.
      </p>

      <Button className="mt-4 bg-black text-white px-4 py-6 rounded-xl font-medium cursor-pointer">
        Get Started Free {">"}
      </Button>
    </div>
  );
};
