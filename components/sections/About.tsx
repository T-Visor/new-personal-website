import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex justify-center items-center space-x-5 px-4 dark:bg-gray-900 dark:text-white"
    >
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <p> M.S Towson University - Towson University </p>
          <p> B.S Towson University - Towson University </p>
        </CardContent>
        <CardFooter className="flex-col gap-2">
        </CardFooter>
      </Card>
            <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          Hello
        </CardContent>
        <CardFooter className="flex-col gap-2">
        </CardFooter>
      </Card>
    </section>
  );
}