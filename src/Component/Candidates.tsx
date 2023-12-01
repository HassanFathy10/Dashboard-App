import React, { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { Link } from 'react-router-dom';
import Styles from '../Pages/style.module.css'

interface CandidatesProps {
    data: {
        id: number;
        user: string;
        name: string;
        email: string;
        location: string;
        edu: string;
        tag: string;
    }[];
    candidates: {
        id: number;
        user: string;
        name: string;
        email: string;
        location: string;
        edu: string;
        tag: string;
    }[];
}

export default function Candidates({ candidates }: CandidatesProps) {
    const [checkedList, setCheckedList] = useState<Record<number, CheckboxValueType[]>>({});
    const [checkAll, setCheckAll] = useState<boolean>(false);
    const [indeterminate, setIndeterminate] = useState<boolean>(false);

    useEffect(() => {
        const allChecked = Object.values(checkedList).some((list) => list.length > 0);
        const someChecked = Object.values(checkedList).every((list) => list.length > 0);
        setCheckAll(allChecked);
        setIndeterminate(someChecked && allChecked);
    }, [checkedList]);

    const onCheckChange = (candidateId: number, list: CheckboxValueType[]) => {
        setCheckedList((prevCheckedList) => ({
            ...prevCheckedList,
            [candidateId]: list,
        }));
    };

    const onCheckAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const allChecked = e.target.checked;
        const updatedCheckedList: Record<number, CheckboxValueType[]> = {};
        candidates.forEach((candidate: any) => {
            updatedCheckedList[candidate.id] = allChecked ? [candidate.id] : [];
        });
        setCheckAll(allChecked);
        setCheckedList(updatedCheckedList);
    };

    return (
        <article>
            <article className='d-flex p-3 flex-wrap border-bottom'>
                <FormControlLabel
                    control={
                        <Checkbox
                            indeterminate={!indeterminate}
                            checked={checkAll}
                            onChange={onCheckAllChange}
                        />
                    }
                    label={<span className='text-primary fw-bold m-2'>247 candidates</span>}
                />
                <article className='ms-auto d-flex'>
                    <span className='fw-medium text-primary m-2'>Qualified</span>
                    <span className={Styles.span}></span>
                    <span className='text-black fw-medium m-2'>Task <span className={Styles.number}>25</span></span>
                    <span className={Styles.span}></span>
                    <span className='text-black fw-medium m-2'>Disqualified <span className={Styles.number}>78</span></span>
                </article>
            </article>
            {candidates.map((candidate: any) => (
                <article className={`border-bottom ${Styles.line}`} key={candidate.id}>
                    <article className='d-flex align-items-center mt-5 gap-5'>
                        <article className='d-flex m-4'>
                            <Checkbox
                                style={{ height: '10px' }}
                                checked={checkedList[candidate.id]?.length > 0}
                                onChange={(e) => onCheckChange(candidate.id, e.target.checked ? [candidate.id] : [])}
                            />
                        </article>
                        <article className='mx-3'>
                            <Link to={`/Candidate/${candidate.id}`} state={{ data: candidate }} className={`text-decoration-none p-3 fw-bolder fs-5 ${Styles.user}`}>{candidate.user}</Link>
                        </article>
                        <ul className='list-unstyled lh-lg'>
                            <li className='fw-bold'>{candidate.name}</li>
                            <li className='fw-normal'>{candidate.location}</li>
                            <li className='fw-light'>{candidate.edu}</li>
                            <li className='fw-light text-primary'>{candidate.tag}</li>
                            <li className='fw-medium text-info'>
                                <span className={Styles.info}>New York</span> &nbsp;
                                <span className={Styles.info}>Marketing</span> &nbsp;
                                <span className={Styles.info}>London</span>
                            </li>
                        </ul>
                    </article>
                </article>
            ))}
        </article>
    );
};





