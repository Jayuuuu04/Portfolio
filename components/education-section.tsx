import { education } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl gap-6 mt-8">
          {education.map((edu, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>
                <div className="grid gap-1">
                  <CardTitle>{edu.degree}</CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{edu.institution}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
