import { TypeAnimation } from "react-type-animation";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ReactGA from "react-ga4";

export default function CallToAction() {
  function handleCallToAction() {
    ReactGA.event({
      category: "action",
      action: "call_to_action",
    });
  }
  return (
    <>
      <section className="flex flex-col items-stretch justify-center bg-dark-brown mb-10 py-10 mx-0 w-full xl:px-64">
        <div className="flex-col md:w-full m-4 md:m-auto py-2 md:py-10">
          <div className="bg-medium-brown rounded-md px-3 txt-title text-light-brown text-sm w-fit mb-10">
            Mais de <span className="text-red txt-title">18.000 pessoas</span>{" "}
            já acessaram
          </div>
          <div className="min-h-[4em]">
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
                "Qual linguagem devo aprender primeiro?",
                4000,
                "É melhor começar pelo Frontend ou Backend?",
                4000,
                "É possível programar sem saber inglês?",
                4000,
                "Só vou aprender com cursos pagos?",
                4000,
                "Como sei se sou Júnior ou Senior?",
                4000,
              ]}
              speed={60} // Custom Speed from 1-99 - Default Speed: 40
              className="text-2xl md:text-4xl text-yellow"
              wrapper="h1" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </div>
          <p className=" mt-10 max-w-xl text-lg md:text-xl txt-title text-red">
            Essas dúvidas não são só suas.
          </p>
          <p className=" mt-1 max-w-xl text-lg md:text-xl txt-title text-yellow">
            Desde Junho/2022 mais de 18.000 pessoas já acessaram a{" "}
            <span className="txt-title text-red">Trilha Info </span>
            gratuitamente como uma ferramenta de apoio aos estudos.
          </p>
          <div className="flex bg-medium-brown rounded-md px-2 txt-title text-light-brown text-sm w-fit my-6">
            <div className="bg-blue rounded-full w-2 h-2 m-auto mr-2"></div>Conteúdo totalmente gratuito
          </div>
          <div className="flex w-full">
            <AnchorLink
              onClick={handleCallToAction}
              href="#mainRoadmaps"
              className="mt-6 bg-blue p-2 text-xl txt-title rounded-md"
            >
              Comece Agora
            </AnchorLink>
          </div>
        </div>
      </section>
    </>
  );
}
