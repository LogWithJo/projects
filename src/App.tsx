import { Button } from "./components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./components/ui/card";

type Project = {
	title: string;
	description: string;
	slug: string;
};

const PROJECTS: Project[] = [
	{
		title: "Todo",
		description: "A minimal todo app",
		slug: "Todo",
	},
	{
		title: "Countdown-Timer",
		description: "Time-based countdown timer",
		slug: "Countdown-Timer",
	},
	{
		title: "React",
		description: "React project playground",
		slug: "React",
	},
	{
		title: "Tracker",
		description: "Track your tasks and progress",
		slug: "Tracker",
	},
	{
		title: "LoginPage",
		description: "Simple login page UI",
		slug: "LoginPage",
	},
	{
		title: "React-Bytegrad",
		description: "A simple learning projects",
		slug: "React-Bytegrad",
	},
	{
		title: "Quiz",
		description: "A Simple learning quiz app",
		slug: "Quiz",
	},
];

function ProjectCard({ title, description, slug }: Project) {
	const url = `https://logwithjo.github.io/${slug}/`;

	return (
		<Card className="group/card overflow-hidden transition-shadow hover:shadow-lg">
			<div className="relative">
				{/* Preview */}
				<div className="aspect-[16/10] w-full overflow-hidden bg-muted/40">
					<iframe
						src={url}
						title={`${title} preview`}
						loading="lazy"
						referrerPolicy="no-referrer"
						className="h-full w-full border-0 overflow-y-hiddenn"
						// sandbox keeps the preview safer; adjust if your sites require more permissions
						sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
					/>
				</div>

				{/* Hover overlay */}
				<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover/card:opacity-100">
					<div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
				</div>
			</div>

			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>

			<CardFooter>
				<Button asChild>
					<a href={url} target="_blank" rel="noreferrer">
						Open project
					</a>
				</Button>
			</CardFooter>
		</Card>
	);
}

export function App() {
	return (
		<div className="mx-auto max-w-7xl px-4 py-10">
			<header className="mb-8">
				<h1 className="text-balance text-3xl font-semibold">My Projects</h1>
				<p className="mt-2 text-muted-foreground">
					Gallery of my apps with live previews.
				</p>
			</header>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{PROJECTS.map((p) => (
					<ProjectCard key={p.slug} {...p} />
				))}
			</div>
		</div>
	);
}

export default App;
