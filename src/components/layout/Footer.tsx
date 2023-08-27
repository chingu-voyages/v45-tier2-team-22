const Footer = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ textAlign: 'center', margin: '1rem' }}>
          <h4>Project created for Chingu Voyage #45</h4>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <a href="https://github.com/chingu-voyages/v45-tier2-team-22">
            <svg
              width="2rem"
              height="2rem"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
              fill="#A06AF5"
              transform="translateY(1%)"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </a>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <a href="https://www.linkedin.com/in/emiri-ishikawa-5579341b0/">
          <img
            src={'/images/image4.jpg'}
            alt="profile1"
            sizes="32"
            height="32"
            width="32"
            style={{
              borderRadius: '50%',
              margin: '0.4rem',
              border: '1px solid #fff',
            }}
          />
        </a>

        <a href="https://www.linkedin.com/in/jeeanny/">
          <img
            src={'/images/image1.jpg'}
            alt="profile2"
            sizes="32"
            height="32"
            width="32"
            style={{
              borderRadius: '50%',
              margin: '0.4rem',
              border: '1px solid #fff',
            }}
          />
        </a>

        <a href="https://www.linkedin.com/in/padraig-o-donoghue-6175101ba/">
          <img
            src={'/images/image2.jpg'}
            alt="profile3"
            sizes="32"
            height="32"
            width="32"
            style={{
              borderRadius: '50%',
              margin: '0.4rem',
              border: '1px solid #fff',
            }}
          />
        </a>

        <a href="https://github.com/simonC137">
          <img
            src={'/images/image5.png'}
            alt="profile4"
            sizes="32"
            height="32"
            width="32"
            style={{
              borderRadius: '50%',
              margin: '0.4rem',
              border: '1px solid #fff',
            }}
          />
        </a>

        <a href="https://www.linkedin.com/in/renan-tiscoski/">
          <img
            src={'/images/image3.jpg'}
            alt="profile5"
            sizes="32"
            height="32"
            width="32"
            style={{
              borderRadius: '50%',
              margin: '0.4rem',
              border: '1px solid #fff',
            }}
          />
        </a>
      </div>
    </>
  );
};

export default Footer;
