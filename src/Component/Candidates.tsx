import React, { useState, useEffect } from 'react';
import Styles from './style.module.css';
import { Link } from 'react-router-dom';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

export default function Candidates({ candidates }: { candidates: any }) {
    const [checkedList, setCheckedList] = useState<Record<number, CheckboxValueType[]>>({});
    const [checkAll, setCheckAll] = useState<boolean>(false);
    const [indeterminate, setIndeterminate] = useState<boolean>(false);
    // Ant Design
    useEffect(() => {
        // Check if all candidates are checked
        const allChecked = Object.values(checkedList).some((list) => list.length > 0);
        // Check if some, but not all, candidates are checked
        const someChecked = Object.values(checkedList).every((list) => list.length > 0);
        setCheckAll(allChecked);
        // If some, but not all, candidates are checked, set indeterminate to true
        // Otherwise, set indeterminate to false
        setIndeterminate(someChecked && allChecked);
    }, [checkedList]);

    const onCheckChange = (candidateId: number, list: CheckboxValueType[]) => {
        setCheckedList((prevCheckedList) => ({
            ...prevCheckedList,
            [candidateId]: list,
        }));
    };
    const onCheckAllChange = (e: CheckboxChangeEvent) => {
        const allChecked = e.target.checked;
        // Set all candidates' checkboxes to either checked or unchecked
        const updatedCheckedList: Record<number, CheckboxValueType[]> = {};
        candidates.forEach((candidate: any) => {
            updatedCheckedList[candidate.id] = allChecked ? [candidate.id] : [];
        });
        setCheckAll(allChecked);
        setCheckedList(updatedCheckedList);
    };
    const CheckboxGroup = Checkbox.Group;
    return (
        <article>
            <article className={`d-flex p-3 flex-wrap ${Styles.line}`}>
            <Checkbox className='m-2' indeterminate={!indeterminate} checked={checkAll} onChange={onCheckAllChange} />
                <span className='text-primary fw-bold m-2'>247 candidates</span>
                <article className='ms-auto d-flex'>
                    <span className='fw-medium text-primary m-2'>Qualified</span>
                    <span className={Styles.span}></span>
                    <span className='text-black fw-medium m-2'>Task <span className={Styles.number}>25</span></span>
                    <span className={Styles.span}></span>
                    <span className='text-black fw-medium m-2'>Disqualified <span className={Styles.number}>78</span></span>
                </article>
            </article>
            {candidates.map((candidate: any) => (
                <article className={`${Styles.line}`} key={candidate.id}>
                    <article className='d-flex align-items-center mt-5 gap-5'>
                        <article className='d-flex m-4'>
                            <CheckboxGroup
                                options={[{ label: '', value: candidate.id as CheckboxValueType }]}
                                value={checkedList[candidate.id] || []}
                                onChange={(list) => onCheckChange(candidate.id, list)}
                            />
                        </article>
                        <article className='mx-3'>
                            <Link to={`/Candidate/${candidate.id}`} className={`text-decoration-none p-3 fw-bolder fs-5 ${Styles.user}`}>{candidate.user}</Link>
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





