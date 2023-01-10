import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AutoDeleteComponent from '../../AutoDeleteComponent/AutoDeleteComponent';
import AutoDeleteContainer from '../../AutoDeleteContainer/AutoDeleteContainer';
import KeepDataComponent from '../../AutoDeleteContainer/KeepDataComponent/KeepDataComponent';
import DatasetTable from '../../DatasetTable/DatasetTable';
import SaveComponent from '../../SaveComponent/SaveComponent';
import '../DatasetModal/DatasetModal.scss';

function DatasetModal() {
  const [getData, setGetData] = useState([]);
  const [getAutoDelValue, setGetDelValue] = useState(0);

  useEffect(() => {
    fetch('/Data/data.json')
      .catch(err => {
        console.log(err);
      })
      .then(res => res.json())
      .then(data => {
        setGetData(data);
      });
  }, []);

  const getAutoDelData = data => {
    setGetDelValue(data);
  };

  // useEffect(() => {
  //   getAutoDelData();
  // }, [getData]);

  const indexList = [
    { id: 'home', img: 'image/home.svg', link: '/' },
    { id: 'setting', img: 'image/setting.svg' },
  ];

  return (
    <div className='studioContainer'>
      <div className='studioBlockWrapper'>
        <nav className='studioLeftSideNav'>
          <div className='userInfo'>
            <img src='image/user01.png' alt='userImg' />
            <h4 className='userName'>@Dabnii</h4>
          </div>
          <section>
            <ul className='steps'>
              {indexList.map((list, index) => (
                <Link to={list.link}>
                  <li key={index}>
                    <img className='listImg' src={list.img} alt='icon' />
                    {list.id}
                  </li>
                </Link>
              ))}
            </ul>
          </section>
        </nav>
        <div className='studioContainerBorder'>
          <h2>
            Your
            <br />
            data
          </h2>
          <div className='datasetTable'>
            <DatasetTable getData={getData} />
          </div>
        </div>
        <div className='autoDelAlign'>
          <AutoDeleteContainer getData={getData} />
          <KeepDataComponent
            getData={getData}
            getAutoDelValue={getAutoDelValue}
          />
          <AutoDeleteComponent
            getData={getData}
            getAutoDelData={getAutoDelData}
          />
          <SaveComponent />
        </div>
      </div>
    </div>
  );
}

export default DatasetModal;
