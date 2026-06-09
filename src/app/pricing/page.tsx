import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'

import Footer from '@/components/layout/Footer'

import Container from '@/components/layout/Container'



export default function PricingProposalPage() {

  return (

    <>

      <Navbar />



      <main>

        <section className="pt-44 pb-32 border-b border-black/10">

          <Container>

            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">

              Private Pricing Proposal

            </p>



            <h1 className="max-w-6xl text-5xl md:text-7xl font-medium tracking-tight leading-none">

              Choose the right growth system for your business.

            </h1>



            <p className="mt-auto max-w-3xl text-xl leading-relaxed text-zinc-600">

              Transparent pricing designed for agents, teams and brokerages

              ready to scale through marketing, automation and AI.

            </p>

          </Container>

        </section>



        <section className="py-32">

          <Container>

           <div className="grid gap-8 lg:grid-cols-3">



              <div className="flex h-full flex-col rounded-3xl border border-black/10 p-10">

                <p className="text-sm uppercase tracking-widest text-zinc-500">

                  Starter

                </p>



                <div className="mt-6 text-4xl md:text-5xl font-medium">

                  $1,997

                </div>



                <p className="mt-2 text-zinc-500">

                  per month

                </p>



                <p className="mt-8 text-zinc-600">

                  Best for individual realtors getting started.

                </p>



                <ul className="mt-auto space-y-4 text-zinc-700">

                  <li>✓ Branding & Logo</li>

                  <li>✓ Landing Page</li>

                  <li>✓ Basic AI Chatbot</li>

                  <li>✓ Ads Setup</li>

                  <li>✓ Monthly Report</li>

                  <li>✓ 30 Days Support</li>

                </ul>



                <button className="mt-10 w-full rounded-full border border-black px-6 py-4">
  Get Started
</button>

              </div>



              <div className="relative flex h-full flex-col rounded-3xl border-2 border-black p-10">
                <div className="absolute -top-4 left-10 rounded-full bg-black px-4 py-2 text-xs uppercase tracking-widest text-white">
  Most Popular
</div>
              
                <p className="text-sm uppercase tracking-widest text-zinc-500">

                  Growth

                </p>

               
               <div className="mt-6 text-4xl md:text-5xl font-medium">

                  $3,997

                </div>



                <p className="mt-2 text-zinc-500">

                  per month

                </p>



                <p className="mt-8 text-zinc-600">

                  Most popular package for serious growth.

                </p>



                <ul className="mt-auto space-y-4 text-zinc-700">

                  <li>✓ Everything In Starter</li>

                  <li>✓ Complete Lead Funnel</li>

                  <li>✓ WhatsApp Integration</li>

                  <li>✓ AI Qualification</li>

                  <li>✓ CRM Integration</li>

                  <li>✓ Weekly Optimization</li>

                  <li>✓ 90 Days Support</li>

                </ul>



              <button className="mt-10 w-full rounded-full bg-black px-6 py-4 text-white">
  Most Popular
</button>

              </div>



              <div className="flex h-full flex-col rounded-3xl border border-black/10 p-10">

                <p className="text-sm uppercase tracking-widest text-zinc-500">

                  Enterprise

                </p>



               <div className="mt-6 text-4xl md:text-5xl font-medium">

                  $7,997+

                </div>



                <p className="mt-2 text-zinc-500">

                  per month

                </p>



                <p className="mt-8 text-zinc-600">

                  Built for brokerages and large teams.

                </p>



                <ul className="mt-auto space-y-4 text-zinc-700">

                  <li>✓ Everything In Growth</li>

                  <li>✓ Multi-Agent AI Systems</li>

                  <li>✓ Team Training</li>

                  <li>✓ White Label Options</li>

                  <li>✓ Advanced Analytics</li>

                  <li>✓ Dedicated Manager</li>

                  <li>✓ Priority Support</li>

                </ul>



                <button className="mt-10 w-full rounded-full border border-black px-6 py-4">
  Contact Us
</button>

              </div>



            </div>

          </Container>

        </section>



        <section className="border-t border-black/10 py-32">

          <Container>

            <h2 className="mb-12 text-5xl font-bold">

              Compare Features

            </h2>



            <div className="overflow-x-auto">

              <table className="w-full border-collapse">

                <thead>

                  <tr className="border-b border-black/10">

                    <th className="py-6 text-left">Feature</th>

                    <th className="py-6 text-center">Starter</th>

                    <th className="py-6 text-center">Growth</th>

                    <th className="py-6 text-center">Enterprise</th>

                  </tr>

                </thead>



                <tbody>

                  <tr className="border-b border-black/10">

                    <td className="py-5">Custom Branding</td>

                    <td className="text-center">✓</td>

                    <td className="text-center">✓</td>

                    <td className="text-center">✓</td>

                  </tr>



                  <tr className="border-b border-black/10">

                    <td className="py-5">Landing Pages</td>

                    <td className="text-center">✓</td>

                    <td className="text-center">✓</td>

                    <td className="text-center">✓</td>

                  </tr>



                  <tr className="border-b border-black/10">

                    <td className="py-5">AI Automation</td>

                    <td className="text-center">Basic</td>

                    <td className="text-center">Advanced</td>

                    <td className="text-center">Custom</td>

                  </tr>



                  <tr className="border-b border-black/10">

                    <td className="py-5">CRM Integration</td>

                    <td className="text-center">—</td>

                    <td className="text-center">✓</td>

                    <td className="text-center">✓</td>

                  </tr>



                  <tr>

                    <td className="py-5">Strategy Calls</td>

                    <td className="text-center">Monthly</td>

                    <td className="text-center">Weekly</td>

                    <td className="text-center">Priority</td>

                  </tr>

                </tbody>

              </table>

            </div>

          </Container>

        </section>



        <section className="border-t border-black/10 py-32">

          <Container>

            <h2 className="mb-12 text-5xl font-bold">

              Add-On Services

            </h2>



            <div className="grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl border border-black/10 p-8">

                Landing Page Development — $1,497

              </div>



              <div className="rounded-2xl border border-black/10 p-8">

                Advanced AI Training — $2,997

              </div>



              <div className="rounded-2xl border border-black/10 p-8">

                Managed Ad Campaigns — $1,200/mo

              </div>



              <div className="rounded-2xl border border-black/10 p-8">

                Brokerage Team Training — $3,997

              </div>

            </div>

          </Container>

        </section>



        <section className="border-t border-black/10 py-32">

           <Container>

                      <div className="max-w-5xl">

                        <h2 className="text-5xl md:text-8xl font-semibold tracking-tight leading-none">

                          Ready to stop guessing

                          <br />

                          and start growing?

                        </h2>

          

                        <p

                          className="max-w-3xl text-xl leading-relaxed text-zinc-600"

                          style={{

                            marginTop: '48px',

                          }}

                        >

                          Build a smarter marketing system, generate more qualified leads,

                          and automate your growth with REMA.

                        </p>

          

                        <div

                          className="flex flex-wrap items-center"

                          style={{

                            marginTop: '56px',

                            gap: '24px',

                          }}

                        >

                          <Link
  href="/contact"
  className="rounded-full bg-black font-medium text-white"
  style={{
    padding: '18px 40px',
  }}
>
  Get Your Free Lead Audit
</Link>

<Link
  href="/ai-assistant"
  className="rounded-full border border-black font-medium transition hover:bg-black hover:text-white"
  style={{
    padding: '18px 40px',
  }}
>
  Talk To REMA AI
</Link>

                        </div>

                      </div>

                    </Container>

        </section>

      </main>



      <Footer />

    </>

  )

}