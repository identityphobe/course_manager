<template>
  <h1 class="title is-3 has-text-centered">Courses Joined</h1>
  <div class="section pt-0">
    {{ user }}
    {{ coursesJoined }}
    <ul>
      <li v-for="course in user.courses" :key="course">
        <router-link :to="course">{{ course }}</router-link>
      </li>
    </ul>
    <!-- TODO: Create a component out of this -->
    <!-- <p>College of Computing and Informatics</p>
    
    <p>College of Engineering</p>
    <ul>
      <li v-for="course in COECourses" :key="course.name">
        <router-link :to="course.link">{{ course.name }}</router-link>
      </li>
    </ul> -->

    <!--  use v-for with computed properties to list all courses -->
    <!-- <li v-for="course in courses" :key="course.name"></li> -->
  </div>
</template>

<script>
import database from "../database";
import { ref, child, get } from "firebase/database";
Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter((key) => predicate(obj[key]))
    .reduce((res, key) => ((res[key] = obj[key]), res), {});
export default {
  name: "CoursesJoined",
  computed: {
    // coursesJoined() {
    //   // const dbRef = ref(database);
    //   // const fetchCourse = async (ref, courseID) => {
    //   //   get(child(dbRef, `courses/${courseID}`))
    //   //     .then((snapshot) => {
    //   //       if (snapshot.exists()) {
    //   //         this.course = snapshot.val();
    //   //       } else {
    //   //         console.log("No data available");
    //   //       }
    //   //     })
    //   //     .catch((error) => {
    //   //       console.error(error);
    //   //     });
    //   // };
    //   // for (let index, courseID in this.user.courses) {
    //   //   console.log(courseID);
    //   // }
    //   console.log(this.user.courses);
    //   // this.user.courses.forEach(function (value) {
    //   //   console.log(value);
    //   // });
    //   return "1";
    // },
  },
  data() {
    return {
      user: {},
      coursesJoined: [],
    };
  },
  created() {
    let ID = localStorage.getItem("ID");
    const dbRef = ref(database);
    const fetchUser = (ref, id) => {
      get(child(ref, `users/${id}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.user = snapshot.val();
            // let joinedCourses = [];
            this.user.courses.forEach(function (val) {
              // joinedCourses.push(val);

              get(child(ref, `courses/${val}`))
                .then((snapshot) => {
                  if (snapshot.exists()) {
                    console.log(snapshot.val());
                  } else {
                    console.log("No data available");
                  }
                })
                .catch((error) => {
                  console.error(error);
                });
            });

            // console.log(joinedCourses);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchUser(dbRef, ID);

    const fetchJoinedCourses = () => {
      console.log(this.user);
      // this.user.courses.forEach(function (value) {
      //   console.log(value);
      // });

      // get(child(dbRef, `courses/${courseID}`))
      //   .then((snapshot) => {
      //     if (snapshot.exists()) {
      //       console.log(snapshot.val());
      //     } else {
      //       console.log("No data available");
      //     }
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    };
    fetchJoinedCourses();
  },
};
</script>