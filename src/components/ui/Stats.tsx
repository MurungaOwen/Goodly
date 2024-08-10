import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
function StatisticsSection() {
    const contributionText: string = `
  Making a difference in the lives of street children and orphans is easier than you think. 
  Here’s how you can contribute:
  - **Donate**: Your financial support helps us provide essentials like food, clothing, and education.
  - **Volunteer**: Offer your time and skills to make a direct impact on their lives.
  - **Sponsor**: Support a child’s education and well-being through our sponsorship programs.
  - **Spread the Word**: Share our mission with friends and family to raise awareness.
`;
  return (
    <>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4" data-aos="fade-right" data-aos-offset="100">
          <h4 className="text-center text-2xl font-bold mb-12">Statistics</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Card className="border border-black rounded-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Street Children Percentage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold">72.4% male</p>
                <p className="text-xl font-bold">27.6% female</p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border border-black rounded-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Living in Urban Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">60%</p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border border-black rounded-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Lack Access to Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">80%</p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="border border-black rounded-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Face Health Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">45%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-8">
        {/* Image Container */}
        <div
          className="relative w-full md:w-1/2"
          data-aos="fade-right"
          data-aos-offset="100"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3huMUP0513MBspTNihRnrIsVdw0S7Vsy01A&s" // Replace with your image URL
            className="object-cover w-full h-full rounded-lg shadow-lg"
            alt="Helping Children"
          />
        </div>

        {/* Text Container */}
        <div
          className="w-full md:w-1/2 p-6"
          data-aos="fade-left"
          data-aos-offset="100"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            How You Can Contribute
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {contributionText.split("\n").map((line, index) => (
              <span key={index}>
                {line.split("**").map((text, i) =>
                  i % 2 === 1 ? (
                    <strong key={i} className="text-orange-500">
                      {text}
                    </strong>
                  ) : (
                    <React.Fragment key={i}>{text}</React.Fragment>
                  )
                )}
                <br />
              </span>
            ))}
          </p>
        </div>
      </section>
    </>
  );
}

export default StatisticsSection;
