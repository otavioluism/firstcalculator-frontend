import styled from 'styled-components';

export const Header = styled.div`
  position: absolute;
  width: 321px;
  height: 367px;
  left: 625px;
  top: 259px;
  background: rgba(196, 196, 196, 0.84);
  border-radius: 20px 0px;

  input {
    position: absolute;
    width: 293px;
    height: 61px;
    left: 14px;
    top: 13px;
    border: 0;
    font-size: 20px;
    padding: 20px;
    background: #ffffff;
    border-radius: 8px;
  }

  button:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  section.up {
    button {
      position: absolute;
      width: 65px;
      height: 57px;
      top: 85px;
      background: #ffffff;
      border-radius: 20px 0px;
      font-size: 20px;
      font-weight: bold;
      transition: opacity 0.2s;
    }

    button.seven {
      left: 14px;
    }

    button.eigth {
      left: 90px;
    }
    button.nine {
      left: 166px;
    }
    button.dividir {
      left: 242px;
      background: #ff9900;
      border-radius: 8px;
      border: 0;
    }
  }
  section.center {
    button {
      position: absolute;
      width: 65px;
      height: 57px;
      top: 155px;
      background: #ffffff;
      border-radius: 20px 0px;
      font-size: 20px;
      font-weight: bold;
    }

    button.four {
      left: 14px;
    }

    button.five {
      left: 90px;
    }
    button.six {
      left: 166px;
    }
    button.multiplica {
      left: 242px;
      background: #ff9900;
      border-radius: 8px;
      border: 0;
    }
  }
  section.down {
    button {
      position: absolute;
      width: 65px;
      height: 57px;
      top: 225px;
      background: #ffffff;
      border-radius: 20px 0px;
      font-size: 20px;
      font-weight: bold;
    }

    button.one {
      left: 14px;
    }

    button.two {
      left: 90px;
    }
    button.three {
      left: 166px;
    }
    button.menos {
      left: 242px;
      background: #ff9900;
      border-radius: 8px;
      border: 0;
    }
  }

  section.more-down {
    button {
      position: absolute;
      width: 65px;
      height: 57px;
      top: 295px;
      background: #ffffff;
      border-radius: 20px 0px;
      font-size: 20px;
      font-weight: bold;
    }

    button.delete {
      left: 14px;
      background: rgba(129, 129, 129, 0.79);
      border: 0;
    }

    button.zero {
      left: 90px;
    }
    button.equal {
      left: 166px;
      background: rgba(129, 129, 129, 0.79);
      border: 0;
    }
    button.more {
      left: 242px;
      background: #ff9900;
      border-radius: 8px;
      border: 0;
    }
  }
`;
