"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./index.css";
import Link from "next/link";
import Image from "next/image";
import a from "./img/misfortune.jpg";
import b from "./img/abundant.jpg";

export default function Home() {
  const router = useRouter();

  const handleOrderClick = () => {
    router.push("https://torchged.pay.clickbank.net/?cbitems=1&cbur=a");
  };

  const handleDeclineOrderClick = () => {
    router.push("https://torchged.pay.clickbank.net/?cbitems=1&cbur=d");
  };

  return (
    <main
      style={{
        backgroundColor: "#190b2c",
        height: "100%",
      }}
    >
      <div id="top">
        <h2>IMPORTANT: Do NOT Close This Window Or Click The "Back" Button.</h2>
        <h2>
          Clicking your "back" button will result in your order being
          double-billed
        </h2>
      </div>
      <div id="welcome">
        <h2 style={{ fontSize: "40px", fontWeight: "800", lineHeight: "50px" }}>
          Welcome To
        </h2>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "800",
            lineHeight: "50px",
          }}
        >
          Divine Astrology Reading!
        </h2>
        <h3>
          Please Read This Short Introduction Letter While Your Divine Account
          Is Being Created
        </h3>
        <h4 style={{ fontWeight: 500 }}>
          Doing So Will Ensure You Get The Most Out Of The Ultimate Astrology
          Frequency
        </h4>
      </div>
      <div style={{ justifyContent: "center" }}>
        <div className="container" id="letter">
          <p dir="ltr">
            <span>Hey, It’s Eileen Helion here…</span>
          </p>
          <p dir="ltr">
            <span>
              I would like to congratulate you on making the most important
              decision in your life.
            </span>
          </p>
          <p dir="ltr">
            <span>And even though you don't realise it yet.</span>
          </p>
          <p dir="ltr">
            <span>You're in the RIGHT PLACE.</span>
          </p>
          <p dir="ltr">
            <span>
              By deciding to get The Ultimate Astrology Frequency, you've just
              set a series of events in motion…
            </span>
          </p>
          <h2 id="lh">
            <span>Soon You Will See The World Changes For You</span>
          </h2>
          <p dir="ltr">
            <span>
              You’ve gone from being in a situation where you may feel you
              cannot have or manifest your dream life…
            </span>
          </p>
          <p dir="ltr">
            <span>
              …To having your true destiny and finally going to receive your
              dream life.
            </span>
          </p>
          <p dir="ltr">
            <span>You’ve gone from being ignored by others...</span>
          </p>
          <p dir="ltr">
            <span>…To being the person who has everyone’s attention.</span>
          </p>
          <p dir="ltr">
            <span>You’re not only leaving those frustrations behind…</span>
          </p>
          <p dir="ltr">
            <span>…You’re also leaving those past behind you…</span>
          </p>

          <h3 id="lh">
            <span>"And Now, You’re Meeting Your New Life”</span>
          </h3>
          <p dir="ltr">
            <span>
              You’re meeting the blessing from the cosmic planets and the favor
              from the entire universe…
            </span>
          </p>
          <p dir="ltr">
            <span>
              You’re meeting the guidance from the astrology that’s going to
              show the right path for you…
            </span>
          </p>
          <p dir="ltr">
            <span>
              …the right path that will allow you to receive everything you
              want.
            </span>
          </p>
          <p dir="ltr">
            <span>All without pain, suffering and misfortune…</span>
          </p>
          <p dir="ltr">
            <span>
              Once you start listening to The Ultimate Astrology Frequency…
            </span>
          </p>
          <p dir="ltr">
            <span>
              You will soon receive the health you want, the career you imagine
              and the relationship you dream of.
            </span>
          </p>
          <p dir="ltr">
            <span>Are you ready for that?</span>
          </p>
          <p dir="ltr">
            <span>I can feel you are.</span>
          </p>
          <p dir="ltr">
            <span>
              Because every person who has got The Ultimate Astrology Frequency…
            </span>
          </p>
          <p dir="ltr">
            <span>
              …is always the one who walks out the door with their fortune told.
            </span>
          </p>

          <h3 id="lh">
            <span>
              You Now Have An Ability That Less Than 1% Of People Will Ever Have
            </span>
          </h3>
          <p dir="ltr">
            <span>
              You now possess a cosmic energy that can give you the power to
              summon and manifest your dream life.
            </span>
          </p>
          <p dir="ltr">
            <span>
              And this is the only power you can ever have to avoid misfortune
              in your life.
            </span>
          </p>
          <p dir="ltr">
            <span>Just like us.</span>
          </p>
          <p dir="ltr">
            <span>
              We are the only few people on earth, who have this cosmic power to
              turn everything into our favor.
            </span>
          </p>
          <p dir="ltr">
            <span>
              And because of your decision to get The Ultimate Astrology
              Frequency…
            </span>
          </p>

          <h3 id="lh">
            <span>It’s Now Your Turn...</span>
          </h3>
          <p dir="ltr">
            <span>
              It’s your turn to have the healthy body you always deserve.
            </span>
          </p>
          <p dir="ltr">
            <span>
              It’s your turn to have a career that everyone sees you as the
              GO-TO person in the industry.
            </span>
          </p>
          <p dir="ltr">
            <span>
              It's your turn to have a relationship that your partner will
              always see you as the #1 obsession and true inspiration.
            </span>
          </p>
          <p dir="ltr">
            <span>
              All you have to do is follow my instructions you’re going to see
              inside The Ultimate Astrology Frequency.
            </span>
          </p>
          <p dir="ltr">
            <span>It’s simple as that.</span>
          </p>
          <p dir="ltr">
            <span>And I have to be honest with you...</span>
          </p>

          <h3 id="lh">
            <span>
              The Decision You’ve Got The Ultimate Astrology Frequency Is The
              Second Most Important Decision Of Your Life
            </span>
          </h3>
          <p dir="ltr">
            <span>
              The most important decision is going to be right here, right now
              on this very page...
            </span>
          </p>
          <p dir="ltr">
            <span>
              A decision that's going to be the difference between you receiving
              everything you want…
            </span>
          </p>
          <p dir="ltr">
            <span>
              …and making sure the entire universe favors you - FOREVER.
            </span>
          </p>
          <p dir="ltr">
            <span>But before I reveal everything...</span>
          </p>
          <p dir="ltr">
            <span>There's something very important that you need to know.</span>
          </p>
          <p dir="ltr">
            <span>
              Because when I decided to share these secret gifts with the world…
            </span>
          </p>
          <p dir="ltr">
            <span>I wanted to do something different…</span>
          </p>
          <p dir="ltr">
            <span>
              …something that can truly help people receive their fortune.
            </span>
          </p>
          <p dir="ltr">
            <span>
              I didn't even care too much about being famous, gaining any kind
              of internet notoriety… or even liked.
            </span>
          </p>
          <p dir="ltr">
            <span>Instead...</span>
          </p>

          <h3 id="lh">
            <span>
              My Number 1 Goal Is To Help As Many People As Possible To Get Away
              Their Misfortune Without Any Hard Work
            </span>
          </h3>
          <p dir="ltr">
            <span>Because it hit me one night…</span>
          </p>
          <p dir="ltr">
            <span>
              Because the only way I will know that I have done the right thing
              with The Ultimate Astrology Frequency is...
            </span>
          </p>
          <p dir="ltr">
            <span>
              …if you can have receive everything you want and keep them
              forever…
            </span>
          </p>
          <p dir="ltr">
            <span>…while no one can steal it from you.</span>
          </p>
          <p dir="ltr">
            <span>Why?</span>
          </p>
          <p dir="ltr">
            <span>
              Because if The Ultimate Astrology Frequency does help you…
            </span>
          </p>
          <p dir="ltr">
            <span>
              ...then you will tell your friends, and they will tell their
              friends…
            </span>
          </p>
          <p dir="ltr">
            <span>…and they will tell their friends…</span>
          </p>
          <p dir="ltr">
            <span>So I set myself a goal...</span>
          </p>

          <h3 id="lh">
            <span>
              I Wanted The Ultimate Astrology Frequency To Help 7,777 People To
              Turn Their Life Around In 2024
            </span>
          </h3>
          <p dir="ltr">
            <span>But I’ll be honest…</span>
          </p>
          <p dir="ltr">
            <span>
              Turning that dream into a reality was a lot harder than you think…
            </span>
          </p>
          <p dir="ltr">
            <span>
              The only way to do that was by spreading the word via social
              media.
            </span>
          </p>
          <p dir="ltr">
            <span>
              And based on the stories, testimonials and messages of joy we get
              every day…
            </span>
          </p>
          <p dir="ltr">
            <span>We feel like we’ve accomplished that.</span>
          </p>
          <p dir="ltr">
            <span>
              But even though I heard amazing stories of success from people who
              got The Ultimate Astrology Frequency...
            </span>
          </p>
          <p dir="ltr">
            <span>My intuition felt that something was off…</span>
          </p>
          <p dir="ltr">
            <span>So I asked my aides about it.</span>
          </p>
          <p dir="ltr">
            <span>And they agreed.</span>
          </p>
          <p dir="ltr">
            <span>Now you see…</span>
          </p>
          <p dir="ltr">
            <span>
              Despite giving away countless The Ultimate Astrology Frequency
              with the lowest cost, and transforming the lives of thousands of
              people…
            </span>
          </p>
          <p dir="ltr">
            <span>There was still 1 problem...</span>
          </p>

          <h3 id="lh">
            <span>
              Receiving Everything You Want Is One Thing - But Keeping Them Is
              Another
            </span>
          </h3>
          <p dir="ltr">
            <span>You see.</span>
          </p>
          <p dir="ltr">
            <span>
              You can just listen to the audio you have to receive everything
              you want…
            </span>
          </p>
          <p dir="ltr">
            <span>But it raises the questions...</span>
          </p>
          <p dir="ltr">
            <span>
              What if you don’t have time to keep listening to this frequency
              after these 67 days?
            </span>
          </p>
          <p dir="ltr">
            <span>
              What if you are too busy to remember to listen to this frequency
              with the instruction?
            </span>
          </p>
          <p dir="ltr">
            <span>
              And what if… you lose everything because you forget to listen to
              it?
            </span>
          </p>

          <h3 id="lh">
            <span>Can You See Why We Are Having Such Problems?</span>
          </h3>
          <p dir="ltr">
            <span>That's when it dawned on us...</span>
          </p>
          <p dir="ltr">
            <span>
              You need something that can keep the cosmic energy favor you
              forever.
            </span>
          </p>
          <p dir="ltr">
            <span>Because if you don’t have it…</span>
          </p>
          <p dir="ltr">
            <span>
              …you may lose everything when things don’t go in your way.
            </span>
          </p>
          <p dir="ltr">
            <span>
              You need something that can reinforce the power of the universe…
            </span>
          </p>
          <p dir="ltr">
            <span>
              …so you will never need to worry the problems I just mentioned…
            </span>
          </p>
          <p dir="ltr">
            <span>And when you lose everything you receive…</span>
          </p>
          <p dir="ltr">
            <span>It is very HARD to get them back…</span>
          </p>
          <p dir="ltr">
            <span>And in some cases…</span>
          </p>
          <p dir="ltr">
            <span>You could never get them back.</span>
          </p>
          <p dir="ltr">
            <span>
              That’s why if you don’t have the most important key to reinforce
              the cosmic energy…
            </span>
          </p>
          <p dir="ltr">
            <span>
              …which can allow you keep the things you receive forever…
            </span>
          </p>

          <h3 id="lh">
            <span>
              You Will Have To Be Back To Square One Over And Over Again
            </span>
          </h3>
          <p dir="ltr">
            <span>As much as I tried to fight it...</span>
          </p>
          <p dir="ltr">
            <span>…I knew it was true.</span>
          </p>
          <p dir="ltr">
            <span>
              And it has nothing to do with the people who get The Ultimate
              Astrology Frequency…
            </span>
          </p>
          <p dir="ltr">
            <span>
              But everything to do with the secret to reinforce the cosmic
              energy.
            </span>
          </p>
          <p dir="ltr">
            <span>We’ve all seen it before.</span>
          </p>
          <p dir="ltr">
            <span>
              People are dedicated to listening to The Ultimate Astrology
              Frequency do get results.
            </span>
          </p>
          <p dir="ltr">
            <span>But not everyone can get the results…</span>
          </p>
          <p dir="ltr">
            <span>Some have to keep their health as long as forever…</span>
          </p>
          <p dir="ltr">
            <span>
              Some have to keep their career prosper as long as forever…
            </span>
          </p>
          <p dir="ltr">
            <span>
              Some have to keep their secure relationship as long as forever…
            </span>
          </p>
          <p dir="ltr">
            <span>
              …otherwise they are under the risk of losing everything.
            </span>
          </p>
          <p dir="ltr">
            <span>And that’s a real problem…</span>
          </p>
          <p dir="ltr">
            <span>
              A real problem that you need to find a way to keep the fortune you
              are going to receive…
            </span>
          </p>
          <p dir="ltr">
            <span>In other words…</span>
          </p>
          <p dir="ltr">
            <span>
              You may risk yourself getting into misfortune… accidentally.
            </span>
          </p>
          <p dir="ltr">
            <span>That’s the bad news.</span>
          </p>
          <p dir="ltr">
            <span>But it comes with a good news.</span>
          </p>
          <p dir="ltr">
            <span>As I just knew there’s such a problem…</span>
          </p>
          <p dir="ltr">
            <span>
              I decided to find the way to solve it for the people who have
              grabbed The Ultimate Astrology Frequency…
            </span>
          </p>
          <p dir="ltr">
            <span>I went on research after research…</span>
          </p>
          <p dir="ltr">
            <span>I connected myself with the cosmic planets spiritually…</span>
          </p>
          <p dir="ltr">
            <span>And I even… prayed.</span>
          </p>
          <p dir="ltr">
            <span>And what I found was breathtaking…</span>
          </p>

          <h3 id="lh">
            <span>
              There Is A Unique Way That Can NOT ONLY Keep Your Fortune Forever…
            </span>
          </h3>
          <p dir="ltr">
            <span>
              …But also make the cosmic energy favor you at any moment in your
              life time.
            </span>
          </p>
          <p dir="ltr">
            <span>Not just for a few months…</span>
          </p>
          <p dir="ltr">
            <span>Not just for a few years…</span>
          </p>
          <p dir="ltr">
            <span>…But for your entire life.</span>
          </p>
          <p dir="ltr">
            <span>And from what I’ve found…</span>
          </p>
          <p dir="ltr">
            <span>This is the ONLY way.</span>
          </p>
          <p dir="ltr">
            <span>
              It is a secret vibration that is given by the Mother Moon…
            </span>
          </p>
          <p dir="ltr">
            <span>…who is actually in charge of the energy on earth.</span>
          </p>

          <h2 id="lh">
            <span>
              It Is The Only Solution That Can Allow You To Forever Remove
              Misfortune From Your Life
            </span>
          </h2>
          <p dir="ltr">
            <span>On top of that…</span>
          </p>
          <p dir="ltr">
            <span>
              It is the only path for everyone on earth to summon the cosmic
              energy…
            </span>
          </p>
          <p dir="ltr">
            <span>…in the most efficient way.</span>
          </p>
          <p dir="ltr">
            <span>Which means…</span>
          </p>
          <p dir="ltr">
            <span>
              Once you have The Ultimate Astrology Frequency and this secret
              vibration…
            </span>
          </p>
          <p dir="ltr">
            <span>
              You will not only be able to manifest and receive your dream life…
            </span>
          </p>
          <p dir="ltr">
            <span>You will also be able to keep it forever for yourself.</span>
          </p>
          <p dir="ltr">
            <span>No one can take it.</span>
          </p>
          <p dir="ltr">
            <span>No one can steal it.</span>
          </p>
          <p dir="ltr">
            <span>Only you can have it.</span>
          </p>
          <p dir="ltr">
            <span>And this fortune will last as long as forever.</span>
          </p>
          <p dir="ltr">
            <span>While the world is always changing…</span>
          </p>
          <p dir="ltr">
            <span>The only way to not lose is to be prepared.</span>
          </p>
          <p dir="ltr">
            <span>And that moment has come.</span>
          </p>
          <p dir="ltr">
            <span>The moment to manifest and receive.</span>
          </p>
          <p dir="ltr">
            <span>The moment to be ahead of everyone else.</span>
          </p>
          <p dir="ltr">
            <span>And the moment to secure your life.</span>
          </p>
          <p dir="ltr">
            <span>
              The sacred moment is right here, right now, only on this page…
            </span>
          </p>
          <p dir="ltr">
            <span>…for you to choose the gift from the Mother Moon…</span>
          </p>
          <p dir="ltr">
            <span>…and make sure you are set for life.</span>
          </p>

          <h2 id="lh" style={{ marginBottom: "-40px" }}>
            <span>Introducing...</span>
          </h2>
          <h2 id="lh">
            <span>"The Lunar Prayer"</span>
          </h2>
          <p dir="ltr">
            <span>
              The Lunar Prayer is your key to a life with long-lasting fortune,
              happiness, health & secure relationship.
            </span>
          </p>
          <p dir="ltr">
            <span>
              It contains the divine cosmic power from the Mother Moon.
            </span>
          </p>
          <p dir="ltr">
            <span>
              It is the power that will allow you to experience your live on a
              whole new level…
            </span>
          </p>
          <p dir="ltr">
            <span>
              …while you can ensure there will be no more misfortune that will
              happen in your life.
            </span>
          </p>
          <p dir="ltr">
            <span>No more struggles…</span>
          </p>
          <p dir="ltr">
            <span>No more pain…</span>
          </p>
          <p dir="ltr">
            <span>No more heartbreaks…</span>
          </p>
          <p dir="ltr">
            <span>…fortune and happiness only.</span>
          </p>
          <p dir="ltr">
            <span>
              All you need to do is to listen to The “One-Minute” Lunar Prayer
              with The Ultimate Astrology Frequency for the next 67 days…
            </span>
          </p>
          <p dir="ltr">
            <span>…then everything will be set for you.</span>
          </p>
          <p dir="ltr">
            <span>It’s simple as that.</span>
          </p>
          <p dir="ltr">
            <span>There will never be hard work or effort on you…</span>
          </p>
          <p dir="ltr">
            <span>…because the Mother Moon has all done it for you.</span>
          </p>
          <p dir="ltr">
            <span>And now, with The Lunar Prayer…</span>
          </p>
          <p dir="ltr">
            <span>You can finally ensure you will be healthy.</span>
          </p>
          <p dir="ltr">
            <span>You can finally ensure everything will be secure.</span>
          </p>
          <p dir="ltr">
            <span>You can finally ensure you will be happy.</span>
          </p>
          <p dir="ltr">
            <span>And that’s why…</span>
          </p>

          <h2 id="lh">
            <span>
              This Is The Most Important Decision You’re Going To Make In Your
              Life
            </span>
          </h2>
          <p dir="ltr">
            <span>
              Because this single decision is going to decide one thing…
            </span>
          </p>
          <p dir="ltr">
            <span>
              …one thing that may have a huge impact to your entire life.
            </span>
          </p>
          <p dir="ltr">
            <span>And that one thing is that…</span>
          </p>
          <p dir="ltr">
            <span>If you want to be set for life…</span>
          </p>
          <p dir="ltr">
            <span>You need to know this is the only chance you have.</span>
          </p>
          <p dir="ltr">
            <span>Because this prayer is never public for the world…</span>
          </p>
          <p dir="ltr">
            <span>
              Only the people who are chosen have the chance to have it.
            </span>
          </p>
          <p dir="ltr">
            <span>And now, you are here…</span>
          </p>
          <p dir="ltr">
            <span>…in the most sacred and divine moment…</span>
          </p>
          <p dir="ltr">
            <span>…the opportunity that is given from the Mother Moon…</span>
          </p>
          <p dir="ltr">
            <span>…is just right in front of you.</span>
          </p>

          <h2 id="lh">
            <span>All You Need To Do Is Click The Order Button Below…</span>
          </h2>
          <p dir="ltr">
            <span>
              Then you will never need to worry if misfortune comes to you.
            </span>
          </p>
          <p dir="ltr">
            <span>It’s really simple as that.</span>
          </p>
          <p dir="ltr">
            <span>
              Listen to The Lunar Prayer for the next 67 days with The Ultimate
              Astrology Frequency.
            </span>
          </p>
          <p dir="ltr">
            <span>See your fortune unfold in front of you.</span>
          </p>
          <p dir="ltr">
            <span>Watch the world always favors you.</span>
          </p>
          <p dir="ltr">
            <span>Feel the universe giving you the abundant luck.</span>
          </p>
          <p dir="ltr">
            <span>
              Just one minute every night, for the next 67 days, then you will
              be set for life.
            </span>
          </p>
          <p dir="ltr">
            <span>
              And here’s what it can mean for you when you click the order
              button below.
            </span>
          </p>
          <p dir="ltr">
            <span>It means you will be happy for the rest of your life.</span>
          </p>
          <p dir="ltr">
            <span>
              It means you will receive everything you want for the rest of your
              life.
            </span>
          </p>
          <p dir="ltr">
            <span>
              And it means you will enjoy every single moment in the rest of
              your life.
            </span>
          </p>
          <p dir="ltr">
            <span>So if you are truly serious…</span>
          </p>
          <p dir="ltr">
            <span>Then you need The Lunar Prayer!</span>
          </p>

          <h2 id="lh">
            <span>
              Because "The Lunar Prayer" Is The Only Way We Can Ensure You To
              Keep Your Fortune
            </span>
          </h2>
          <p dir="ltr">
            <span>
              Others are finding this out as well, they get The Ultimate
              Astrology Frequency...
            </span>
          </p>
          <p dir="ltr">
            <span>...and follow it up with The Lunar Prayer...</span>
          </p>
          <p dir="ltr">
            <span>And they all feel satisfied with their life.</span>
          </p>
          <p dir="ltr">
            <span>You see.</span>
          </p>
          <p dir="ltr">
            <span>
              The Ultimate Astrology Frequency gives you the way to manifest and
              receive…
            </span>
          </p>
          <p dir="ltr">
            <span>
              And The Lunar Prayer gives you the ultimate solution to keep them
              as long as forever.
            </span>
          </p>
          <p dir="ltr">
            <span>And now, if you haven’t yet realized…</span>
          </p>

          <h2 id="lh">
            <span>
              The Decision To Have “The Lunar Prayer" Could Make Or Break Your
              Life’s Journey…
            </span>
          </h2>
          <p dir="ltr">
            <span>So now the question is.</span>
          </p>
          <p dir="ltr">
            <span>What is that worth to you?</span>
          </p>
          <p dir="ltr">
            <span>What is a life without pain worth to you?</span>
          </p>
          <p dir="ltr">
            <span>What is a life without suffering worth to you?</span>
          </p>
          <p dir="ltr">
            <span>
              What is the realization that you have everything you want worth to
              you?
            </span>
          </p>
          <p dir="ltr">
            <span>There's no need to worry anymore…</span>
          </p>
          <p dir="ltr">
            <span>What is that worth to you?</span>
          </p>
          <p dir="ltr">
            <span>
              I can tell you what it was worth to others who get The Lunar
              Prayer...
            </span>
          </p>
          <p dir="ltr">
            <span>Gone were those sleepless nights…</span>
          </p>
          <p dir="ltr">
            <span>Gone was the tight knot in the stomach…</span>
          </p>
          <p dir="ltr">
            <span>And gone was those fear and darkness…</span>
          </p>
          <p dir="ltr">
            <span>
              Everything in "The Lunar Prayer" only gets you even a fraction of
              that…
            </span>
          </p>
          <p dir="ltr">
            <span>But we're not here to make you deals.</span>
          </p>

          <h2 id="lh">
            <span>
              We’re Here To Help You Get Your Dream Life As Secure As It Can
            </span>
          </h2>
          <p dir="ltr">
            <span>So I thought long and hard about this.</span>
          </p>
          <p dir="ltr">
            <span>One had I want every one of us to have this.</span>
          </p>
          <p dir="ltr">
            <span>I want to make it free.</span>
          </p>
          <p dir="ltr">
            <span>On the other hand…</span>
          </p>
          <p dir="ltr">
            <span>We can't just stay in business giving everything away.</span>
          </p>
          <p dir="ltr">
            <span>I have costs to keep.</span>
          </p>
          <p dir="ltr">
            <span>I thought long and hard about this.</span>
          </p>
          <p dir="ltr">
            <span>So I started selling it...</span>
          </p>

          <h2 id="lh">
            <span>And I Got Raving Reviews</span>
          </h2>
          <p dir="ltr">
            <span>
              Our email inbox was packed with messages from people who were
              practically glowing.
            </span>
          </p>
          <p dir="ltr">
            <span>
              They told me stories about how their life became so easy.
            </span>
          </p>
          <p dir="ltr">
            <span>I had other stories of people seeing miracles happen.</span>
          </p>
          <p dir="ltr">
            <span>
              And the ones that stuck in my mind the most (and brought the
              biggest smile to my face)...
            </span>
          </p>
          <p dir="ltr">
            <span>
              ...Were the emails with zero text, just a single picture.
            </span>
          </p>
          <p dir="ltr">
            <span>A picture of a family.</span>
          </p>
          <p dir="ltr">
            <span>And with smiles that have no stress.</span>
          </p>
          <p dir="ltr">
            <span>All of this told me I was on the right track with this.</span>
          </p>
          <p dir="ltr">
            <span>
              But I also knew we had a lot of people who still weren't able to
              afford it.
            </span>
          </p>

          <h2 id="lh">
            <span>So I Decided To Drop The Price Lower One More Time</span>
          </h2>
          <p dir="ltr">
            <span>And I got even more raving reviews.</span>
          </p>
          <p dir="ltr">
            <span>Happy people.</span>
          </p>
          <p dir="ltr">
            <span>
              Long, deep conversations where they turn their life around and
              start helping other people too.
            </span>
          </p>
          <p dir="ltr">
            <span>
              Promotion after promotion from the company they work for and start
              being able to travel around the world with their loving family.
            </span>
          </p>
          <p dir="ltr">
            <span>Having everything they want without suffering.</span>
          </p>
          <p dir="ltr">
            <span>
              So with the overwhelming success "The Lunar Prayer" was bringing,
              we finally decided to settle on the lowest price possible.
            </span>
          </p>

          <h2 id="lh">
            <span>You Can Have "The Lunar Prayer" Today For Just $67!</span>
          </h2>
          <p dir="ltr">
            <span>
              That means you don’t need to spend a fortune to receive your
              fortune…
            </span>
          </p>
          <p dir="ltr">
            <span>Because that’s our purpose here…</span>
          </p>
          <p dir="ltr">
            <span>
              We want to let the chosen people have the best life they can ever
              have…
            </span>
          </p>
          <p dir="ltr">
            <span>Without pain, worries and fear…</span>
          </p>

          <h2 id="lh">
            <span>
              Right here, right now on this page you can try the "The Lunar
              Prayer" for just $67
            </span>
          </h2>
          <div id="CTA">
            <p>
              <span id="yt">Yours Today For Only $67</span>
            </p>
            <button id="bt" onClick={handleOrderClick}>
              Order Now!
            </button>
            <p></p>
            <Link
              id="dl"
              href="https://torchged.pay.clickbank.net/?cbitems=1&cbur=d"
            >
              <u>No, I Don't Want To Make My Manifestation Come True Faster</u>
            </Link>
          </div>
          <h2 id="lh">
            <span>
              In Fact, This Is The Most Divine Gift You'll Ever Receive
            </span>
          </h2>
          <p dir="ltr">
            <span>
              Because while the Mother Moon is willing to ONLY share this gift
              to the people on this page…
            </span>
          </p>
          <p dir="ltr">
            <span>
              You will never be able to receive this gift somewhere else in the
              world or in your entire life time.
            </span>
          </p>
          <p dir="ltr">
            <span>If you really think about it…</span>
          </p>
          <p dir="ltr">
            <span>
              You can simply have the blessing from the Mother Moon without
              doing any hard work…
            </span>
          </p>
          <p dir="ltr">
            <span>
              And on top of that, you can keep yourself away from those
              potential misfortune…
            </span>
          </p>
          <p dir="ltr">
            <span>…and be set for life after the next 67 days.</span>
          </p>
          <p dir="ltr">
            <span>Is there any cost from your side?</span>
          </p>
          <p dir="ltr">
            <span>So now…</span>
          </p>
          <p dir="ltr">
            <span>You have options to choose.</span>
          </p>
          <p dir="ltr">
            <span>
              One is to say no to this gift and continue your life with
              potential misfortune…
            </span>
          </p>
          <p dir="ltr">
            <span>
              And another one is to receive this gift and see miracles unfold.
            </span>
          </p>
          <p dir="ltr">
            <span>
              The choice is yours, and we are ready to hear your good news!
            </span>
          </p>

          <h2 id="lh">
            <span>Congratulations Your Order Has Been Upgraded!</span>
          </h2>
          <p dir="ltr" style={{ textAlign: "center", fontFamily: "Poppins" }}>
            <span>
              "The Lunar Prayer" Is Now Available For Instant Access -- Click
              Order Now And Receive The Gift From The Mother Moon
            </span>
          </p>
          <h2 id="lh">
            <span>
              "The Lunar Prayer" Is Your Key To A Life With Long-Lasting
              Fortune, Happiness, Health & Secure Relationship
            </span>
          </h2>
          <div className="row">
            <div className="col">
              <div id="top-bar">
                <p id="top-line">
                  RISK POTENTIAL MISFORTUNE IN YOUR LIFE AHEAD
                </p>
              </div>
              <div id="f-image-box">
                <Image id="f-img" src={a} width="500" height="500" />
              </div>

              <div id="for the button" style={{ textAlign: "center" }}>
                <button id="f-d-bt" onClick={handleDeclineOrderClick}>
                  <h2
                    style={{
                      marginBottom: "10px",
                      marginTop: "7px",
                      fontSize: "22px",
                    }}
                  >
                    No, I Don't Want To Have My Fortune Forever
                  </h2>
                  <span
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: "500",
                      marginTop: "0px",
                      letterSpacing: "0.5px",
                      fontStyle: "italic",
                    }}
                  >
                    Click Here To Decline This Offer
                  </span>
                </button>
              </div>
              <p className="meaning" id="f-h2">
                Missing out on this means...
              </p>
              <ul id="bullet-d">
                <li>
                  - Have to know the Mother Moon is not going to favor your
                  first...
                </li>
                <li>- Have to encounter misfortune in your life...</li>
                <li>- Not able to keep your fortune forever...</li>
              </ul>
            </div>
            <div className="col">
              <div id="top-bar">
                <p id="top-line">GET A SAFE, SECURE AND ABUNDANT LIFE</p>
              </div>
              <div id="f-image-box">
                <Image id="f-img" src={b} width="100%" height="100%" />
              </div>

              <div id="for the button" style={{ textAlign: "center" }}>
                <button id="f-a-bt" onClick={handleOrderClick}>
                  <span style={{ letterSpacing: "0.5px" }}>Order Now!</span>
                </button>
              </div>
              <p className="meaning" id="f-h2">
                Completing this means...
              </p>
              <ul id="bullet-a">
                <li>- Mother Moon is going to favor your first forever</li>
                <li>- You will never encounter misfortune in your life</li>
                <li>- Keep your fortune forever</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="bottom">
        <footer>
          <p dir="ltr">
            <span>
              Results from our programs, methods, content and advice are not
              typical and your results may vary. Results are not guaranteed, and
              any claims made are for entertainment and educational purposes
              only. Results will vary based on individuals, how much effort is
              put forward, how long a person uses our methods for, and various
              other factors. Our customers results (shared on our sales pages,
              blog posts, emails etc), are based on the average of a sample set
              of course customers. The results may vary from person to person.
            </span>
          </p>
          <p id="ltr">
            <span>
              ClickBank is the retailer of products on this site. CLICKBANK® is
              a registered trademark of Click Sales Inc., a Delaware corporation
              located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709,
              USA and used by permission. ClickBank’s role as retailer does not
              constitute an endorsement, approval or review of these products or
              any claim, statement or opinion used in promotion of these
              products.
            </span>
          </p>
          <p dir="ltr">
            <span>Terms and Conditions | Privacy Policy</span>
          </p>
          <p dir="ltr">
            <span>
              Copyright © Divine Astrology Reading - All Rights Reserved
            </span>
          </p>
        </footer>
      </div>
    </main>
  );
}
