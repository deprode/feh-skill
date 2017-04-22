<template>
    <table id="skill-table" class="table">
        <tr>
            <th>英雄名</th>
            <th class="has-text-right">スキル</th>
            <th>レアリティ</th>
        </tr>
        <tr></tr>
        <tbody>
            <tr v-for="hero in skills">
                <td>{{ hero.name }}</td>
                <td>
                    <p v-for="skill in hero.skills">
                        {{ skill.name }}
                    </p>
                </td>
                <td>
                    <p v-for="skill in hero.skills">
                        ☆{{ skill.rare }}
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import data from '../../data.json';
import _ from 'lodash';

export default {
    data () {
        return {
            skill_data: data
        }
    },
    props: {
        skillName: {
            type: String
        }
    },
    computed: {
        skills: function () {
            const searchQuery = this.skillName;
            if (!searchQuery) {
                // 未入力なら全部出す
                return _.map(this.skill_data.heros, this.formData);
            }
            return _.filter(this.skill_data.heros, function (elem, index) {
                // 中間一致で表示候補に含める
                return _.find(elem.skills, function (e) {
                    return e.name.indexOf(searchQuery) != -1;
                }) != null;
            }).map(this.formData);
        }
    },
    methods: {
        // 表示するデータを形成する
        formData: function (elem) {
            const searchQuery = this.skillName;
            const skills = _.filter(elem.skills, function (skill) {
                return skill.name.indexOf(searchQuery) != -1;
            })
            return {
                name: elem.name,
                skills: skills
            };
        }
    }
}

</script>

<style scoped>
#skill-table {
    width: 60%;
    margin: 20px auto;
    border: 1px solid #aaa;
    border-collapse:
}
th, td {
    border: 1px solid #bbb;
}

</style>