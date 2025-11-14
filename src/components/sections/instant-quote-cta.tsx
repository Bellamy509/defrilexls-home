const InstantQuoteCta = () => {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-20 xl:px-0">
        <div className="items-center justify-between text-center md:flex md:text-left">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold leading-snug text-foreground md:text-[28px]">
              Get an instant quote
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              The easy way to get your documents translated fast.
              <br />
              Buy online in a few clicks.
            </p>
          </div>
          <div>
            <a
              href="https://defrilex-ls.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-[#0065FF]"
            >
              Instant quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantQuoteCta;