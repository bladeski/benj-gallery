import React from 'react';
import { Tag as TagIcon } from 'react-feather';
import Tag from './Tag';

const Filter = (props) => {
    return (
        <div className='filter tags'>
            <TagIcon></TagIcon> Tags:
            {props.filter.map((tag, index) => (
                <Tag key={index} tag={tag} onClickTag={props.handleTagClick}></Tag>
            ))}
        </div>
    );
};

export default Filter;
