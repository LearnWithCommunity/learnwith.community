/*
 *  The about us section.
 *  Created On 09 February 2022
 */

import { Component, h } from '@stencil/core';

@Component({
    tag: 'l-about',
})
export class About {
    render() {
        return <section id="about">
            <div class="container mx-auto flex flex-col items-center px-6 pt-10 pb-48 text-[#3C2A31] md:pt-20 md:pb-20 dark:text-white">
                <h1 class="text-4xl font-bold mb-12">About Us</h1>
                <div class="prose prose-a:no-underline prose-a:text-[#651A9E] lg:prose-xl dark:prose-invert dark:prose-a:text-[#ff0054]">
                    <p><strong>Learn With Community (LWC)</strong> was founded on <strong>15th June 2021</strong> with the goal of encouraging new learners and developers to educate, learn, and build concepts related to several fields in computer science while putting focus on emerging technologies.</p>
                    <p>It supports and motivates students and learners who want to explore and move in different domains of technology such as - <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener">Artificial Intelligence</a>, <a href="https://en.wikipedia.org/wiki/Data_science" target="_blank" rel="noopener">Data Science</a>, <a href="https://en.wikipedia.org/wiki/Information_security" target="_blank" rel="noopener">Information Security</a>, <a href="https://en.wikipedia.org/wiki/Web_development" target="_blank" rel="noopener">Web development</a>, <a href="https://en.wikipedia.org/wiki/Android_Development" target="_blank" rel="noopener">Android development</a>, <a href="https://en.wikipedia.org/wiki/Cloud_computing" target="_blank" rel="noopener">Cloud computing</a>, <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" rel="noopener">Machine Learning</a> and <a href="https://en.wikipedia.org/wiki/Cryptography" target="_blank" rel="noopener">Cryptography</a>, etc.</p>
                    <p>We not only provide useful resources and materials to the students for reference, but also conduct various interactive workshops, sessions and podcasts, by those developers who are skilled and experienced, so that the learners could understand everything in the best possible way while also getting their doubts resolved.</p>
                    <p>This is a helpful and supportive community for all developers and technical explorers out there.</p>
                    <p>We will not only guide you & help you to move forward but let you explore more. Whether you're a student, a learner, an explorer, a working professional or anyone who is passionate about technology, we welcome you to join our community.</p>
                </div>
            </div>
        </section>
    }
}
